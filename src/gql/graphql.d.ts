export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Application = BaseModelInterface & {
  __typename?: 'Application';
  confidential: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  redirectUri: Scalars['String']['output'];
  scopes: Scalars['String']['output'];
  secret: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  website?: Maybe<Website>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for Application. */
export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  /** A list of edges. */
  edges: Array<ApplicationEdge>;
  /** A list of nodes. */
  nodes: Array<Application>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ApplicationEdge = {
  __typename?: 'ApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Application>;
};

export type ApplicationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type AssetRole = BaseModelInterface & {
  __typename?: 'AssetRole';
  assetId: Scalars['ID']['output'];
  assetType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  roles: Array<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  vendor: Vendor;
  vendorId: Scalars['ID']['output'];
  vendorUser: VendorUser;
  vendorUserId: Scalars['ID']['output'];
};

/** The connection type for AssetRole. */
export type AssetRoleConnection = {
  __typename?: 'AssetRoleConnection';
  /** A list of edges. */
  edges: Array<AssetRoleEdge>;
  /** A list of nodes. */
  nodes: Array<AssetRole>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AssetRoleEdge = {
  __typename?: 'AssetRoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AssetRole>;
};

export type AssetRoleFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type AuthCheckLogin = {
  __typename?: 'AuthCheckLogin';
  exists: Scalars['Boolean']['output'];
  mobileConfirmationSentAt?: Maybe<Scalars['String']['output']>;
};

export type BaseModelInterface = {
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type BoolFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Brand = BaseModelInterface & {
  __typename?: 'Brand';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

/** The connection type for Brand. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of edges. */
  edges: Array<BrandEdge>;
  /** A list of nodes. */
  nodes: Array<Brand>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Brand>;
};

export type BrandFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DateFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdFilter = {
  /** is null ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Int']['input']>;
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Int']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['ID']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Starts with */
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Float']['input']>;
  /** in: Matches none of values in giver array */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Float']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Listing = BaseModelInterface & {
  __typename?: 'Listing';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  website: Website;
  websiteId: Scalars['ID']['output'];
};

/** The connection type for Listing. */
export type ListingConnection = {
  __typename?: 'ListingConnection';
  /** A list of edges. */
  edges: Array<ListingEdge>;
  /** A list of nodes. */
  nodes: Array<Listing>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListingEdge = {
  __typename?: 'ListingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Listing>;
};

export type ListingFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Merchant = BaseModelInterface & {
  __typename?: 'Merchant';
  approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  listingsCount?: Maybe<Scalars['Int']['output']>;
  requestedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  vendor: Vendor;
  website: Website;
};

/** The connection type for Merchant. */
export type MerchantConnection = {
  __typename?: 'MerchantConnection';
  /** A list of edges. */
  edges: Array<MerchantEdge>;
  /** A list of nodes. */
  nodes: Array<Merchant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MerchantEdge = {
  __typename?: 'MerchantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Merchant>;
};

export type MerchantFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addImageVariant?: Maybe<Variant>;
  /** Checks if email or mobile registered */
  authCheckLogin?: Maybe<AuthCheckLogin>;
  authRegister?: Maybe<User>;
  createApplication?: Maybe<Application>;
  createAssetRole?: Maybe<AssetRole>;
  createBrand?: Maybe<Brand>;
  createListing?: Maybe<Listing>;
  createMerchant?: Maybe<Merchant>;
  createProduct?: Maybe<Product>;
  createUser?: Maybe<User>;
  createVariant?: Maybe<Variant>;
  createVendor?: Maybe<Vendor>;
  createVendorUser?: Maybe<VendorUser>;
  createWebsite?: Maybe<Website>;
  destroyApplication?: Maybe<Application>;
  destroyAssetRole?: Maybe<AssetRole>;
  destroyBrand?: Maybe<Brand>;
  destroyListing?: Maybe<Listing>;
  destroyMerchant?: Maybe<Merchant>;
  destroyProduct?: Maybe<Product>;
  destroyVariant?: Maybe<Variant>;
  destroyVendor?: Maybe<Vendor>;
  destroyVendorUser?: Maybe<VendorUser>;
  destroyWebsite?: Maybe<Website>;
  resetPassword?: Maybe<User>;
  /** Returns boolean whether sms is sent or not */
  sendOtp?: Maybe<User>;
  updateApplication?: Maybe<Application>;
  updateAssetRole?: Maybe<AssetRole>;
  updateBrand?: Maybe<Brand>;
  updateListing?: Maybe<Listing>;
  updateMerchant?: Maybe<Merchant>;
  updateProduct?: Maybe<Product>;
  updateVariant?: Maybe<Variant>;
  updateVendor?: Maybe<Vendor>;
  updateVendorUser?: Maybe<VendorUser>;
  updateWebsite?: Maybe<Website>;
};


export type MutationAddImageVariantArgs = {
  input: AddImageVariantInput;
};


export type MutationAuthCheckLoginArgs = {
  input: AuthCheckLoginInput;
};


export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
};


export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationCreateAssetRoleArgs = {
  input: CreateAssetRoleInput;
};


export type MutationCreateBrandArgs = {
  input: CreateBrandInput;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationCreateMerchantArgs = {
  input: CreateMerchantInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVariantArgs = {
  input: CreateVariantInput;
};


export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};


export type MutationCreateVendorUserArgs = {
  input: CreateVendorUserInput;
};


export type MutationCreateWebsiteArgs = {
  input: CreateWebsiteInput;
};


export type MutationDestroyApplicationArgs = {
  input: DestroyApplicationInput;
};


export type MutationDestroyAssetRoleArgs = {
  input: DestroyAssetRoleInput;
};


export type MutationDestroyBrandArgs = {
  input: DestroyBrandInput;
};


export type MutationDestroyListingArgs = {
  input: DestroyListingInput;
};


export type MutationDestroyMerchantArgs = {
  input: DestroyMerchantInput;
};


export type MutationDestroyProductArgs = {
  input: DestroyProductInput;
};


export type MutationDestroyVariantArgs = {
  input: DestroyVariantInput;
};


export type MutationDestroyVendorArgs = {
  input: DestroyVendorInput;
};


export type MutationDestroyVendorUserArgs = {
  input: DestroyVendorUserInput;
};


export type MutationDestroyWebsiteArgs = {
  input: DestroyWebsiteInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendOtpArgs = {
  input: SendOtpInput;
};


export type MutationUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


export type MutationUpdateAssetRoleArgs = {
  input: UpdateAssetRoleInput;
};


export type MutationUpdateBrandArgs = {
  input: UpdateBrandInput;
};


export type MutationUpdateListingArgs = {
  input: UpdateListingInput;
};


export type MutationUpdateMerchantArgs = {
  input: UpdateMerchantInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateVariantArgs = {
  input: UpdateVariantInput;
};


export type MutationUpdateVendorArgs = {
  input: UpdateVendorInput;
};


export type MutationUpdateVendorUserArgs = {
  input: UpdateVendorUserInput;
};


export type MutationUpdateWebsiteArgs = {
  input: UpdateWebsiteInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = BaseModelInterface & {
  __typename?: 'Product';
  approved: Scalars['Boolean']['output'];
  approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  brand?: Maybe<Brand>;
  condition: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  productCat?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variants: VariantConnection;
  vendor: Vendor;
};


export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Product. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** A list of nodes. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Product>;
};

export type ProductFilter = {
  approved?: InputMaybe<BoolFilter>;
  brandId?: InputMaybe<IdFilter>;
  condition?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  productCat?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendorId?: InputMaybe<IdFilter>;
};

export type Query = {
  __typename?: 'Query';
  application?: Maybe<Application>;
  applications: ApplicationConnection;
  assetRole?: Maybe<AssetRole>;
  assetRoles: AssetRoleConnection;
  brand?: Maybe<Brand>;
  brands: BrandConnection;
  listing?: Maybe<Listing>;
  listings: ListingConnection;
  me?: Maybe<User>;
  merchant?: Maybe<Merchant>;
  merchants: MerchantConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  user?: Maybe<User>;
  users: UserConnection;
  variant?: Maybe<Variant>;
  variants: VariantConnection;
  vendor?: Maybe<Vendor>;
  vendorUser?: Maybe<VendorUser>;
  vendorUsers: VendorUserConnection;
  vendors: VendorConnection;
  website?: Maybe<Website>;
  websites: WebsiteConnection;
};


export type QueryApplicationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryAssetRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AssetRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMerchantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryVariantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryVendorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVendorUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVendorUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VendorUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VendorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryWebsiteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebsitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WebsiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** Sort Direction */
export enum SortDirection {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export type SortFilter = {
  direction?: InputMaybe<SortDirection>;
  field: Scalars['String']['input'];
};

export type StringFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** contains */
  cont?: InputMaybe<Scalars['String']['input']>;
  /** ends with */
  end?: InputMaybe<Scalars['String']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** starts with */
  start?: InputMaybe<Scalars['String']['input']>;
};

export type User = BaseModelInterface & {
  __typename?: 'User';
  assetRoles?: Maybe<Array<AssetRole>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  nickName?: Maybe<Scalars['String']['output']>;
  registerNum?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  roleMatrix?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type UserFilter = {
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  nickName?: InputMaybe<StringFilter>;
  registerNum?: InputMaybe<StringFilter>;
  role?: InputMaybe<IntFilter>;
  unconfirmedEmail?: InputMaybe<StringFilter>;
  unconfirmedMobile?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Variant = BaseModelInterface & {
  __typename?: 'Variant';
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  depth?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  isMaster: Scalars['Boolean']['output'];
  merchantSku?: Maybe<Scalars['String']['output']>;
  netWeight?: Maybe<Scalars['Float']['output']>;
  optionsText?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  product: Product;
  salePrice?: Maybe<Scalars['Float']['output']>;
  sku: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type VariantImagesArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Variant. */
export type VariantConnection = {
  __typename?: 'VariantConnection';
  /** A list of edges. */
  edges: Array<VariantEdge>;
  /** A list of nodes. */
  nodes: Array<Variant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VariantEdge = {
  __typename?: 'VariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Variant>;
};

export type VariantFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Vendor = BaseModelInterface & {
  __typename?: 'Vendor';
  address?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  registerNum?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

/** The connection type for Vendor. */
export type VendorConnection = {
  __typename?: 'VendorConnection';
  /** A list of edges. */
  edges: Array<VendorEdge>;
  /** A list of nodes. */
  nodes: Array<Vendor>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VendorEdge = {
  __typename?: 'VendorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Vendor>;
};

export type VendorFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type VendorUser = BaseModelInterface & {
  __typename?: 'VendorUser';
  addedBy: User;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  vendor: Vendor;
};

/** The connection type for VendorUser. */
export type VendorUserConnection = {
  __typename?: 'VendorUserConnection';
  /** A list of edges. */
  edges: Array<VendorUserEdge>;
  /** A list of nodes. */
  nodes: Array<VendorUser>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VendorUserEdge = {
  __typename?: 'VendorUserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<VendorUser>;
};

export type VendorUserFilter = {
  createdAt?: InputMaybe<DateFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** Role */
export enum VendorUserRole {
  /** An admin user */
  Admin = 'admin',
  /** A regular member user */
  Member = 'member'
}

export type Website = BaseModelInterface & {
  __typename?: 'Website';
  createdAt: Scalars['ISO8601DateTime']['output'];
  domain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Website. */
export type WebsiteConnection = {
  __typename?: 'WebsiteConnection';
  /** A list of edges. */
  edges: Array<WebsiteEdge>;
  /** A list of nodes. */
  nodes: Array<Website>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WebsiteEdge = {
  __typename?: 'WebsiteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Website>;
};

export type WebsiteFilter = {
  createdAt?: InputMaybe<DateFilter>;
  domain?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  index?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** Autogenerated input type of addImageVariant */
export type AddImageVariantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['Upload']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of authCheckLogin */
export type AuthCheckLoginInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Login email or mobile */
  login: Scalars['String']['input'];
  sendToken?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of authRegister */
export type AuthRegisterInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of createApplication */
export type CreateApplicationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confidential: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  scopes: Scalars['String']['input'];
  secret: Scalars['String']['input'];
  uid: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};

/** Autogenerated input type of createAssetRole */
export type CreateAssetRoleInput = {
  /** Asset id of vendor, or website */
  assetId: Scalars['ID']['input'];
  /** Asset type. Supp::Vendor, Supp::Website, Supp::Merchant */
  assetType: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** roles */
  roles: Array<Scalars['String']['input']>;
  /** First name */
  vendorId: Scalars['ID']['input'];
  /** Employee id. supp_vendor_users */
  vendorUserId: Scalars['ID']['input'];
};

/** Autogenerated input type of createBrand */
export type CreateBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of createListing */
export type CreateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createMerchant */
export type CreateMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createProduct */
export type CreateProductInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sku: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of createUser */
export type CreateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
};

/** Autogenerated input type of createVariant */
export type CreateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  isMaster?: InputMaybe<Scalars['Boolean']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['ID']['input'];
  sku: Scalars['String']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated input type of createVendor */
export type CreateVendorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of createVendorUser */
export type CreateVendorUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  role: VendorUserRole;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of createWebsite */
export type CreateWebsiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated input type of destroyApplication */
export type DestroyApplicationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyAssetRole */
export type DestroyAssetRoleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyBrand */
export type DestroyBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyListing */
export type DestroyListingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyMerchant */
export type DestroyMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyProduct */
export type DestroyProductInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyVariant */
export type DestroyVariantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyVendor */
export type DestroyVendorInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyVendorUser */
export type DestroyVendorUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyWebsite */
export type DestroyWebsiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of resetPassword */
export type ResetPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of sendOtp */
export type SendOtpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** User ID */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Mobile or email */
  login: Scalars['String']['input'];
};

/** Autogenerated input type of updateApplication */
export type UpdateApplicationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confidential?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateAssetRole */
export type UpdateAssetRoleInput = {
  /** Asset id */
  assetId?: InputMaybe<Scalars['ID']['input']>;
  /** Asset type. Supp::Vendor, Supp::Website, Supp::Merchant */
  assetType?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** roles */
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  /** First name */
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  /** Employee id. supp_vendor_users */
  vendorUserId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateBrand */
export type UpdateBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of updateListing */
export type UpdateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  productId?: InputMaybe<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateMerchant */
export type UpdateMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateProduct */
export type UpdateProductInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateVariant */
export type UpdateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  isMaster?: InputMaybe<Scalars['Boolean']['input']>;
  merchantSku?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated input type of updateVendor */
export type UpdateVendorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateVendorUser */
export type UpdateVendorUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<VendorUserRole>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateWebsite */
export type UpdateWebsiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};
