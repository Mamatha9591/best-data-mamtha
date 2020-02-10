export class Companydetails {
    CompanyName: String;
    BrandName: String;
    LogoName: String;
    CIN: String;
    Location: String;
    Website: String;
    Industry: String;
    actives: actives[];
    contacts:contacts[];
    features:features[];
    industries:industries[];
    socialMedia:socialMedia[];
}

export class actives {
    ActiveId:Number;
    Active: String;
    Date_Of_Incorporation: String;
    Director_1: String;
    Director_2: String;
    Director_3: String;
    Director_4: String;
    Director_5: String;
}

export class contacts {
    ContactId:Number;
    Address: string;
    Country: string;
    State: string;
    City: string;
    Pincode: Number;
    Landline_1: string;
    Landline_2: string;
    Mobile_Number_1: string;
    Mobile_Number_2: string;
    Mobile_Number_3: string;
    Email_1: string;
    Email_2: string;
}

export class features {
    featureId: Number;
    EmployeeCount: string;
    CompanyType: string;
    Sector: string;    
}

export class industries {
    IndustryId: Number;
    Industry: string;
    SubIndustry: string;
    Services_1: string;
    Services_2: string;
    Services_3: string;
    Services_4: string;
    Services_5: string;
}

export class socialMedia {
    socialId: Number;
    Twitter: string;
    Facebook: string;
    LinkedIn: string;
    Instagram: string;
}