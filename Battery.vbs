Set oLocator = CreateObject("WbemScripting.SWbemLocator")
Set oServices = oLocator.ConnectServer(".","root\wmi")
Set oResults = oServices.ExecQuery("Select * from batteryfullchargedcapacity")

For each oResult in oResults
  iFull = oResult.FullChargedCapacity
Next

While (1)
  Set oResults = oServices.ExecQuery("Select * from batterystatus")
  For each oResult in oResults
    iRemaining = oResult.RemainingCapacity
    bCharging = oResult.Charging
  Next
  iPercent = ((iRemaining / iFull) * 100) mod 100
  If bCharging And (iPercent > 97) Then 
    msgbox "La carga de la bateria es: " & iPercent & "%",vbInformation, "Carga Bateria"
    wscript.sleep 30000 ' 5 minutes
  End if
Wend