/********** BASICS */
export interface ErrorResponse{
    message: string
}
export interface IndexParameter<T> {
    document?: T,
    query?: T,
    update?: T,
    query2?: T,
    isNotSet?: any
}

/********** USER */
export interface UsersDocument {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string,
    store: string,
    createdDate?: any,
    status: string,
    _id?: string
}
export interface UsersDocumentQuery {
    name?: string,
    email?: string,
    username?: string,
    role?: string,
    password?: string,
    store?: string,
    createdDate?: any,
    status?: string,
    _id?: string
}

/********** JOB */
export interface JobDocument {
    createdBy: string,
    stakeholder: string[],
    job: string,
    jobProgress?: string,
    permission?: string[],
    createdAt?: Date,
    dueDate?: Date,
    isAlert?: boolean,
    _id?: string,
    organization?: string[],
    externalLink?: string,
    actionItems?: string[],
    attachments?: string[]
}
export interface JobQuery {
    _id?: string,
    createdBy?: string,
    stakeholder?: string[],
    job?: string,
    jobProgress?: string,
    permission?: string[],
    createdAt?: Date,
    isAlert?: boolean,
    dueDate?: Date,
    organization?: string[],
}
/********** RESET PASSS */

export interface ResetPassData {
    username?: string,
    email?: string,
    token?: string
}
export interface ResetPassDocument {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}
export interface ResetPassQuery {
    username?: string,
    email?: string,
    token?: string,
    _id?: string
}

export interface ErrorResponse {
    message: string;
}

/********** ORGANIZATION */
export interface OrganizationDocument {
    _id?: string
    organization: string,
    createdAt?: Date,
    definedStages: string[],
    pic: string
}
export interface OrganizationQuery {
    _id?: string
    organization?: string,
    createdAt?: Date,
    definedStages?: string[],
    pic?: string
}
/********** ATTACHMENT */
export interface AttachmentDocument {
    _id?: string
    attachmentName: string,
    attachmentUrl:string ,
    attachmentType:string,
    stakeholder:any[],
    permission:any[],
}
export interface AttachmentQuery {
    _id?: string
    attachmentName?: string,
    attachmentUrl?:string ,
    attachmentType?:string,
    stakeholder?:any[],
    permission?:any[],
}


/********** REQUEST COMPONENT */
export interface RequestComponentDocument {
    createdBy: string,
    requestTitle: string,
    pageName: string,
    pageType: string,
    components: {
        componentName: string,
        componentType: string,
        componentValue: any
    }
    createdAt?: Date,
    organization?: any[],
    permission?: any[]
}
export interface RequestComponentDocumentQuery {
    createdBy?: string,
    requestTitle?: string,
    pageName?: string,
    pageType?: string,
    components?: {
        componentName: string,
        componentType: string,
        componentValue: any
    }
    createdAt?: Date,
    permission?: any[]
}


/********** REQUIREMENT FORM*/
export interface RequirementFormDocument{
    formDate: Date,
    clientName: string,
    clientContact: string,
    websiteGoal: string,
    websiteBrand: string,
    websiteTagline: string,
    websiteDomain: string,
    websiteDetails: {
        menuCount: string,
        menuDetails: any,
    },
    organization: any,
    permission: any
}
export interface RequirementFormDocumentQuery {
    _id?: string,
    formDate?: Date,
    clientName?: string,
    clientContact?: string,
    websiteGoal?: string,
    websiteBrand?: string,
    websiteTagline?: string,
    websiteDomain?: string,
    websiteDetails?: {
        menuCount: string,
        menuDetails: any,
    },
    organization?: any,
    permission?: any
}

/********** TRANSACTIONS COMPONENT */
export interface ItemsTransaction {
    item: string,
    quantity: number,
    unitPrice: number,
    totalUnitPrice: number,
    currency: string
}

export interface TransactionsDocument {
    createdBy: string,
    role?: string,
    createdDate?: Date,
    createdPayment: Date,
    items: ItemsTransaction[],
    transactionStatus: string,
    store?: string,
    totalPrice: any,
    orderId: any,
    transactionId: any,
    currency: string,
}
export interface TransactionsDocumentQuery {
    createdBy?: string,
    role?: string,
    createdDate?: Date,
    createdPayment?: Date,
    items?: any,
    transactionStatus?: string,
    store?: string,
    totalPrice?: any,
    orderId?: any,
    transactionId?: any,
    currency?: string,
}
// export interface TransactionsComponentDocumentQuery {
//     createdBy?: string,
//     requestTitle?: string,
//     pageName?: string,
//     pageType?: string,
//     components?: {
//         componentName: string,
//         componentType: string,
//         componentValue: any
//     }
//     createdAt?: Date,
//     permission?: any[]
// }