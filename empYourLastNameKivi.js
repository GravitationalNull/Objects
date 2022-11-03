document.getElementById("Name").value = _Name;
document.getElementById("ID").value = _ID;
document.getElementById("NUMBER").value = _ShiftNumber;
document.getElementById("HourlyRate").value = _HourlyWageRate;


class Employee{
    constructor(Name,ID,){
        this._Name = Name;
        this._ID = ID;
    }

    get Name() {
        return this._Name;
    }

    set Name(NovaName) {
        this._Name = NovaName;
    }

    get ID() {
        return this._ID;
    }

    set ID(NovID) {
        this._ID = NovID;
    }

}

class ProductionWorker extends Employee{
    constructor(ShiftNumber,HourlyWageRate, Name, ID){
        super(Name,ID);
        this.ShiftNumber = ShiftNumber;
        this.HourlyWageRate = HourlyWageRate;

    }

    get ShiftNumber() {
        return this._ShiftNumber;
    }

    set ShiftNumber(NoviNum) {
        this._ShiftNumber = NoviNum;
    }

    get HourlyWageRate() {
        return this._HourlyWageRate;
    }

    set HourlyWageRate(NovAriable) {
        this._HourlyWageRate = NovAriable;
    }

}



function Register(){
   
    let ShiftNumber = document.getElementById("sh").value;
    for(i=0;i<1;i=i) {
        if (ShiftNumber == ('1' || '2'))
            i = i + 1
        else
            alert("Input a valid shift number.");
            return null;
    
    }

    const ShHWR = new ProductionWorker(ShiftNumber,HourlyWageRate,4,4);
    document.getElementById("dd").innerHTML=ShHWR.Name;
    //const NamD = new Employee(Name,ID);


}
let Reggie = "zero";
let Registrered =  document.getElementbyId(Register()).InnerHTML;
if (Registered != null)
    Reggie = "Registered";
else
    break;