import { AngolanBIValidator } from "./bi.validator";
import { AngolanIBANValidator } from "./iban.validator";
import { AngolanPhoneValidator } from "./phone.validator";

export const Validators ={
    BI: AngolanBIValidator,
    IBAN: AngolanIBANValidator,
    PHONE: AngolanPhoneValidator,
}