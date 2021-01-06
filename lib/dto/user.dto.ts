export interface IUserDto {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressDto;
  phone: string;
  website: string;
  company: ICompanyDto;
}

export interface ICompanyDto {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddressDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoDto;
}

export interface IGeoDto {
  lat: string;
  lng: string;
}
