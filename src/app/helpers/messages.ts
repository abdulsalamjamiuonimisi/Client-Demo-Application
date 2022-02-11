export class MessageUtil{
    static APP_CODE: string = "CABSOL HR";
    static INVALID_LOGIN:string="Either username/password not correct";
    static INVALID_FORM:string="Please fill out the required fields";
    static INTERNAL_SERVER_ERROR:string="Internal Server Error";
    static SUCCESS:string="Login Successfull";
    static PASSWORD_NOT_MATCHED:string="Password not matched Confirmed Password";
    static TIMEOUT_DURATION:number = 8000;
    static RETRIEVE_ERROR:string="** Could not retrieve qualifications, Retry";
    static ERROR_REASON:string="** Could not retrieve reasons, Retry";
    static SAVE_NOT_DONE:string="** Could not save, Retry";
    static RECORD_NOT_FOUND:string="** Could not retrieve qualification types";
    static ERROR_SAVING_INFO:string="** Could not save personal information, Retry";
    static PERIOD_ERROR:string="** Could retrieve schedule period";
    static UPLOAD_ERROR:string="Error! Uploading File";
    static RESPONSE_SUCCESS:string = "Success";
    static SERVER_ERROR:string = 'Oops! We encountered an unexpected problem'
    static LOADING:string = 'Processing request...'

}


export class Constants{
    static LOGIN_USER:string = 'activeUser';
    static TENANT:string = 'Tenant'
    static PAGE:number = 0
    static PAGE_SIZE:number = 10_000
    static TOKEN:string = 'AUTH'
    static COMPLETED:string = 'completed'
    static SECTOR:string = 'sector'
    static CONFIRMED_STATUS = 'CONFIRMED'
    static POST_STATUS = 'POST'
    static PENDING_STATUS = 'PENDING'
    static USER_ROLES = 'roles'
    static IMAGE: string | ArrayBuffer = "image/png"
}