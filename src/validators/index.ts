import { AngolaBIValidator } from "./bi.validator";
import { AngolanIBANValidator } from "./iban.validator";
import { AngolaPhoneValidator } from "./phone.validator";

export const Validators ={
    BI: AngolaBIValidator,
    IBAN: AngolanIBANValidator,
    PHONE: AngolanPhoneValidator
}