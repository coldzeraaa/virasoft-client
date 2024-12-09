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

export type Address = BaseModelInterface & {
  __typename?: 'Address';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  alternativeEmail?: Maybe<Scalars['String']['output']>;
  alternativeMobile?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['ID']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['ID']['output']>;
  districtName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCompany: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  quarter?: Maybe<Quarter>;
  quarterId?: Maybe<Scalars['ID']['output']>;
  quarterName?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['ID']['output']>;
  stateName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alternativeEmail?: InputMaybe<Scalars['String']['input']>;
  alternativeMobile?: InputMaybe<Scalars['String']['input']>;
  cdq?: InputMaybe<Array<Scalars['ID']['input']>>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCompany?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

/** Type of addressable object */
export type Addressable = District | Quarter | State;

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
  vendorUserId?: InputMaybe<IdFilter>;
};

export type Attachment = BaseModelInterface & {
  __typename?: 'Attachment';
  blob: Blob;
  blobId: Scalars['ID']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recordId: Scalars['ID']['output'];
  recordType: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
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

export type Blob = BaseModelInterface & {
  __typename?: 'Blob';
  byteSize: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  serviceName: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
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
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  products: ProductConnection;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};


export type BrandCoverArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};


export type BrandLogoArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};


export type BrandProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
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
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type BrandInput = {
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CabAddress = {
  __typename?: 'CabAddress';
  address?: Maybe<Addressable>;
  addressId?: Maybe<Scalars['ID']['output']>;
  addressType?: Maybe<Scalars['String']['output']>;
  cabAddressId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  source?: Maybe<Scalars['JSON']['output']>;
};

export type CartItemInput = {
  /** Options */
  options?: InputMaybe<Scalars['JSON']['input']>;
  /** Quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** SKU */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Variant ID */
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type Country = BaseModelInterface & {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  iso?: Maybe<Scalars['String']['output']>;
  iso3?: Maybe<Scalars['String']['output']>;
  isoName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numCode?: Maybe<Scalars['String']['output']>;
  states: Array<State>;
  statesRequired: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zipcodeRequired: Scalars['Boolean']['output'];
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

export type District = BaseModelInterface & {
  __typename?: 'District';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quarters: Array<Quarter>;
  state: State;
  stateId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zip?: Maybe<Scalars['String']['output']>;
};

/** The connection type for District. */
export type DistrictConnection = {
  __typename?: 'DistrictConnection';
  /** A list of edges. */
  edges: Array<DistrictEdge>;
  /** A list of nodes. */
  nodes: Array<District>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DistrictEdge = {
  __typename?: 'DistrictEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<District>;
};

export type DistrictFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  stateId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type DynamicPage = BaseModelInterface & {
  __typename?: 'DynamicPage';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Scalars['JSON']['output']>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for DynamicPage. */
export type DynamicPageConnection = {
  __typename?: 'DynamicPageConnection';
  /** A list of edges. */
  edges: Array<DynamicPageEdge>;
  /** A list of nodes. */
  nodes: Array<DynamicPage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DynamicPageEdge = {
  __typename?: 'DynamicPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DynamicPage>;
};

export type DynamicPageFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
};

export type EnumStringFilter = {
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

export type InventoryUnit = BaseModelInterface & {
  __typename?: 'InventoryUnit';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  item: Item;
  itemId: Scalars['ID']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  shipment: Shipment;
  shipmentId: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  stockLocation: StockLocation;
  stockLocationId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant: Variant;
  variantId: Scalars['ID']['output'];
  vendor: Vendor;
  vendorId: Scalars['ID']['output'];
};

export type Item = BaseModelInterface & {
  __typename?: 'Item';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant: Variant;
  variantId: Scalars['ID']['output'];
};

export type Listing = BaseModelInterface & {
  __typename?: 'Listing';
  approved: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  maxQty?: Maybe<Scalars['Int']['output']>;
  minQty?: Maybe<Scalars['Int']['output']>;
  product: Product;
  productId: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  taxonIds: Array<Scalars['ID']['output']>;
  taxons: Array<Taxon>;
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
  approved?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductFilter>;
  productId?: InputMaybe<IdFilter>;
  published?: InputMaybe<BoolFilter>;
  taxon?: InputMaybe<TaxonFilter>;
  taxonIds?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type MailTemplate = BaseModelInterface & {
  __typename?: 'MailTemplate';
  bcc?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mjml: Scalars['Boolean']['output'];
  mjmlTemplate?: Maybe<Scalars['String']['output']>;
  reply?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  template?: Maybe<Scalars['String']['output']>;
  textTemplate?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for MailTemplate. */
export type MailTemplateConnection = {
  __typename?: 'MailTemplateConnection';
  /** A list of edges. */
  edges: Array<MailTemplateEdge>;
  /** A list of nodes. */
  nodes: Array<MailTemplate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MailTemplateEdge = {
  __typename?: 'MailTemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<MailTemplate>;
};

export type MailTemplateFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type MassListingProductInput = {
  /** Product ID */
  productId: Scalars['ID']['input'];
  /** Taxon IDs */
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Menu = BaseModelInterface & {
  __typename?: 'Menu';
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  website: Website;
};

/** The connection type for Menu. */
export type MenuConnection = {
  __typename?: 'MenuConnection';
  /** A list of edges. */
  edges: Array<MenuEdge>;
  /** A list of nodes. */
  nodes: Array<Menu>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MenuEdge = {
  __typename?: 'MenuEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Menu>;
};

export type MenuFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type Merchant = BaseModelInterface & {
  __typename?: 'Merchant';
  approvedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  requestedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  vendor: Vendor;
  vendorId: Scalars['ID']['output'];
  website: Website;
  websiteId: Scalars['ID']['output'];
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
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendor?: InputMaybe<VendorFilter>;
  vendorId?: InputMaybe<IdFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptMerchant?: Maybe<Merchant>;
  activateTruck?: Maybe<Truck>;
  addEmployee?: Maybe<VendorUser>;
  addImageDynamicPage?: Maybe<AddImageDynamicPagePayload>;
  addMassImageVariant?: Maybe<Array<Variant>>;
  addProductImage?: Maybe<Product>;
  addToCart?: Maybe<Order>;
  addVariant?: Maybe<Variant>;
  addVariantImage?: Maybe<Variant>;
  /** Checks if email or mobile registered */
  authCheckLogin?: Maybe<AuthCheckLogin>;
  authRegister?: Maybe<User>;
  cancelOrder?: Maybe<Order>;
  checkoutCart?: Maybe<Order>;
  checkoutPayment?: Maybe<Scalars['JSON']['output']>;
  claimShipment?: Maybe<Shipment>;
  createApplication?: Maybe<Application>;
  createAssetRole?: Maybe<AssetRole>;
  createBrand?: Maybe<Brand>;
  createDynamicPage?: Maybe<DynamicPage>;
  createListing?: Maybe<Scalars['Boolean']['output']>;
  createMailTemplate?: Maybe<MailTemplate>;
  createMenu?: Maybe<Menu>;
  createOptionType?: Maybe<OptionType>;
  createOptionValue?: Maybe<OptionValue>;
  createPaymentMethod?: Maybe<PaymentMethod>;
  createProduct?: Maybe<Product>;
  createProductTaxon?: Maybe<Product>;
  createProperty?: Maybe<Property>;
  createQuote?: Maybe<Quote>;
  createSalePrice?: Maybe<SalePrice>;
  createShippingCategory?: Maybe<ShippingCategory>;
  createShippingMethod?: Maybe<ShippingMethod>;
  createSmsTemplate?: Maybe<SmsTemplate>;
  createStockItem?: Maybe<StockItem>;
  createStockLocation?: Maybe<StockLocation>;
  createTaxon?: Maybe<Taxon>;
  createTruck?: Maybe<Truck>;
  createUser?: Maybe<User>;
  createUserAddress?: Maybe<UserAddress>;
  createVendor?: Maybe<Vendor>;
  createWebsite?: Maybe<Website>;
  createZone?: Maybe<Zone>;
  deleteProductImage?: Maybe<Product>;
  deleteVariantImage?: Maybe<Variant>;
  deliverShipment?: Maybe<Shipment>;
  destroyApplication?: Maybe<Application>;
  /** Remove employee role from asset */
  destroyAssetRole?: Maybe<AssetRole>;
  destroyDynamicPage?: Maybe<DynamicPage>;
  /** Remove employee from vendor */
  destroyEmployee?: Maybe<VendorUser>;
  destroyMailTemplate?: Maybe<MailTemplate>;
  destroyMenu?: Maybe<Menu>;
  destroyPaymentMethod?: Maybe<PaymentMethod>;
  destroyProductTaxon?: Maybe<Product>;
  destroyProperty?: Maybe<Property>;
  destroyQuote?: Maybe<Quote>;
  destroySalePrice?: Maybe<SalePrice>;
  destroyShippingCategory?: Maybe<ShippingCategory>;
  destroyShippingMethod?: Maybe<ShippingMethod>;
  destroySmsTemplate?: Maybe<SmsTemplate>;
  destroyStockItem?: Maybe<StockItem>;
  destroyStockLocation?: Maybe<StockLocation>;
  destroyTaxon?: Maybe<Taxon>;
  destroyUserAddress?: Maybe<UserAddress>;
  destroyZone?: Maybe<Zone>;
  emptyCart?: Maybe<Order>;
  findOrCreateBrand?: Maybe<Brand>;
  findOrCreateOptionType?: Maybe<OptionType>;
  findOrCreateOptionValue?: Maybe<OptionValue>;
  findOrCreateProduct?: Maybe<Product>;
  findOrCreateProductTaxon?: Maybe<Product>;
  findOrCreateStockItem?: Maybe<StockItem>;
  findOrCreateStockLocation?: Maybe<StockLocation>;
  findOrCreateVariant?: Maybe<Variant>;
  inviteMerchant?: Maybe<Merchant>;
  massCreateListing?: Maybe<Scalars['JSON']['output']>;
  massFindOrCreateBrand?: Maybe<Array<Brand>>;
  massFindOrCreateOptionType?: Maybe<Array<OptionType>>;
  massFindOrCreateOptionValue?: Maybe<Array<OptionValue>>;
  massFindOrCreateProduct?: Maybe<Array<Product>>;
  massFindOrCreateStockItem?: Maybe<Array<StockItem>>;
  massFindOrCreateStockLocation?: Maybe<Array<StockLocation>>;
  massFindOrCreateTaxon?: Maybe<Array<Taxon>>;
  massFindOrCreateVariant?: Maybe<Array<Variant>>;
  payOrder?: Maybe<Scalars['JSON']['output']>;
  performOrderAction?: Maybe<PerformOrderActionPayload>;
  removeItem?: Maybe<Order>;
  removeListing?: Maybe<Scalars['Boolean']['output']>;
  removeProduct?: Maybe<Product>;
  removeVariant?: Maybe<Variant>;
  resetPassword?: Maybe<User>;
  /** Returns boolean whether sms is sent or not */
  sendOtp?: Maybe<User>;
  sendTracking?: Maybe<Truck>;
  setAsDefaultUserAddress?: Maybe<UserAddress>;
  shipShipment?: Maybe<Shipment>;
  syncListings?: Maybe<Array<Listing>>;
  updateApplication?: Maybe<Application>;
  updateAssetRole?: Maybe<AssetRole>;
  updateBrand?: Maybe<Brand>;
  updateDynamicPage?: Maybe<DynamicPage>;
  updateEmployee?: Maybe<VendorUser>;
  updateItem?: Maybe<Order>;
  updateListing?: Maybe<Array<Listing>>;
  updateMailTemplate?: Maybe<MailTemplate>;
  updateMenu?: Maybe<Menu>;
  updateMerchant?: Maybe<Merchant>;
  updateMobile?: Maybe<User>;
  updateOptionType?: Maybe<OptionType>;
  updateOptionValue?: Maybe<OptionValue>;
  updatePaymentMethod?: Maybe<PaymentMethod>;
  updateProduct?: Maybe<Product>;
  updateProperty?: Maybe<Property>;
  updateQuote?: Maybe<Quote>;
  updateSalePrice?: Maybe<SalePrice>;
  updateShippingCategory?: Maybe<ShippingCategory>;
  updateShippingMethod?: Maybe<ShippingMethod>;
  updateSmsTemplate?: Maybe<SmsTemplate>;
  updateStockItem?: Maybe<StockItem>;
  updateStockLocation?: Maybe<StockLocation>;
  updateTaxon?: Maybe<Taxon>;
  updateTrack?: Maybe<Truck>;
  updateUser?: Maybe<User>;
  updateVariant?: Maybe<Variant>;
  updateVendor?: Maybe<Vendor>;
  updateWebsite?: Maybe<Website>;
  updateZone?: Maybe<Zone>;
  verifyOtp?: Maybe<Scalars['Boolean']['output']>;
  verifyTruck?: Maybe<Truck>;
};


export type MutationAcceptMerchantArgs = {
  input: AcceptMerchantInput;
};


export type MutationActivateTruckArgs = {
  input: ActivateTruckInput;
};


export type MutationAddEmployeeArgs = {
  input: AddEmployeeInput;
};


export type MutationAddImageDynamicPageArgs = {
  input: AddImageDynamicPageInput;
};


export type MutationAddMassImageVariantArgs = {
  input: AddMassImageVariantInput;
};


export type MutationAddProductImageArgs = {
  input: AddProductImageInput;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAddVariantArgs = {
  input: AddVariantInput;
};


export type MutationAddVariantImageArgs = {
  input: AddVariantImageInput;
};


export type MutationAuthCheckLoginArgs = {
  input: AuthCheckLoginInput;
};


export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
};


export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};


export type MutationCheckoutCartArgs = {
  input: CheckoutCartInput;
};


export type MutationCheckoutPaymentArgs = {
  input: CheckoutPaymentInput;
};


export type MutationClaimShipmentArgs = {
  input: ClaimShipmentInput;
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


export type MutationCreateDynamicPageArgs = {
  input: CreateDynamicPageInput;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationCreateMailTemplateArgs = {
  input: CreateMailTemplateInput;
};


export type MutationCreateMenuArgs = {
  input: CreateMenuInput;
};


export type MutationCreateOptionTypeArgs = {
  input: CreateOptionTypeInput;
};


export type MutationCreateOptionValueArgs = {
  input: CreateOptionValueInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductTaxonArgs = {
  input: CreateProductTaxonInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateQuoteArgs = {
  input: CreateQuoteInput;
};


export type MutationCreateSalePriceArgs = {
  input: CreateSalePriceInput;
};


export type MutationCreateShippingCategoryArgs = {
  input: CreateShippingCategoryInput;
};


export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput;
};


export type MutationCreateSmsTemplateArgs = {
  input: CreateSmsTemplateInput;
};


export type MutationCreateStockItemArgs = {
  input: CreateStockItemInput;
};


export type MutationCreateStockLocationArgs = {
  input: CreateStockLocationInput;
};


export type MutationCreateTaxonArgs = {
  input: CreateTaxonInput;
};


export type MutationCreateTruckArgs = {
  input: CreateTruckInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};


export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};


export type MutationCreateWebsiteArgs = {
  input: CreateWebsiteInput;
};


export type MutationCreateZoneArgs = {
  input: CreateZoneInput;
};


export type MutationDeleteProductImageArgs = {
  input: DeleteProductImageInput;
};


export type MutationDeleteVariantImageArgs = {
  input: DeleteVariantImageInput;
};


export type MutationDeliverShipmentArgs = {
  input: DeliverShipmentInput;
};


export type MutationDestroyApplicationArgs = {
  input: DestroyApplicationInput;
};


export type MutationDestroyAssetRoleArgs = {
  input: DestroyAssetRoleInput;
};


export type MutationDestroyDynamicPageArgs = {
  input: DestroyDynamicPageInput;
};


export type MutationDestroyEmployeeArgs = {
  input: DestroyEmployeeInput;
};


export type MutationDestroyMailTemplateArgs = {
  input: DestroyMailTemplateInput;
};


export type MutationDestroyMenuArgs = {
  input: DestroyMenuInput;
};


export type MutationDestroyPaymentMethodArgs = {
  input: DestroyPaymentMethodInput;
};


export type MutationDestroyProductTaxonArgs = {
  input: DestroyProductTaxonInput;
};


export type MutationDestroyPropertyArgs = {
  input: DestroyPropertyInput;
};


export type MutationDestroyQuoteArgs = {
  input: DestroyQuoteInput;
};


export type MutationDestroySalePriceArgs = {
  input: DestroySalePriceInput;
};


export type MutationDestroyShippingCategoryArgs = {
  input: DestroyShippingCategoryInput;
};


export type MutationDestroyShippingMethodArgs = {
  input: DestroyShippingMethodInput;
};


export type MutationDestroySmsTemplateArgs = {
  input: DestroySmsTemplateInput;
};


export type MutationDestroyStockItemArgs = {
  input: DestroyStockItemInput;
};


export type MutationDestroyStockLocationArgs = {
  input: DestroyStockLocationInput;
};


export type MutationDestroyTaxonArgs = {
  input: DestroyTaxonInput;
};


export type MutationDestroyUserAddressArgs = {
  input: DestroyUserAddressInput;
};


export type MutationDestroyZoneArgs = {
  input: DestroyZoneInput;
};


export type MutationEmptyCartArgs = {
  input: EmptyCartInput;
};


export type MutationFindOrCreateBrandArgs = {
  input: FindOrCreateBrandInput;
};


export type MutationFindOrCreateOptionTypeArgs = {
  input: FindOrCreateOptionTypeInput;
};


export type MutationFindOrCreateOptionValueArgs = {
  input: FindOrCreateOptionValueInput;
};


export type MutationFindOrCreateProductArgs = {
  input: FindOrCreateProductInput;
};


export type MutationFindOrCreateProductTaxonArgs = {
  input: FindOrCreateProductTaxonInput;
};


export type MutationFindOrCreateStockItemArgs = {
  input: FindOrCreateStockItemInput;
};


export type MutationFindOrCreateStockLocationArgs = {
  input: FindOrCreateStockLocationInput;
};


export type MutationFindOrCreateVariantArgs = {
  input: FindOrCreateVariantInput;
};


export type MutationInviteMerchantArgs = {
  input: InviteMerchantInput;
};


export type MutationMassCreateListingArgs = {
  input: MassCreateListingInput;
};


export type MutationMassFindOrCreateBrandArgs = {
  input: MassFindOrCreateBrandInput;
};


export type MutationMassFindOrCreateOptionTypeArgs = {
  input: MassFindOrCreateOptionTypeInput;
};


export type MutationMassFindOrCreateOptionValueArgs = {
  input: MassFindOrCreateOptionValueInput;
};


export type MutationMassFindOrCreateProductArgs = {
  input: MassFindOrCreateProductInput;
};


export type MutationMassFindOrCreateStockItemArgs = {
  input: MassFindOrCreateStockItemInput;
};


export type MutationMassFindOrCreateStockLocationArgs = {
  input: MassFindOrCreateStockLocationInput;
};


export type MutationMassFindOrCreateTaxonArgs = {
  input: MassFindOrCreateTaxonInput;
};


export type MutationMassFindOrCreateVariantArgs = {
  input: MassFindOrCreateVariantInput;
};


export type MutationPayOrderArgs = {
  input: PayOrderInput;
};


export type MutationPerformOrderActionArgs = {
  input: PerformOrderActionInput;
};


export type MutationRemoveItemArgs = {
  input: RemoveItemInput;
};


export type MutationRemoveListingArgs = {
  input: RemoveListingInput;
};


export type MutationRemoveProductArgs = {
  input: RemoveProductInput;
};


export type MutationRemoveVariantArgs = {
  input: RemoveVariantInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendOtpArgs = {
  input: SendOtpInput;
};


export type MutationSendTrackingArgs = {
  input: SendTrackingInput;
};


export type MutationSetAsDefaultUserAddressArgs = {
  input: SetAsDefaultUserAddressInput;
};


export type MutationShipShipmentArgs = {
  input: ShipShipmentInput;
};


export type MutationSyncListingsArgs = {
  input: SyncListingsInput;
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


export type MutationUpdateDynamicPageArgs = {
  input: UpdateDynamicPageInput;
};


export type MutationUpdateEmployeeArgs = {
  input: UpdateEmployeeInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateListingArgs = {
  input: UpdateListingInput;
};


export type MutationUpdateMailTemplateArgs = {
  input: UpdateMailTemplateInput;
};


export type MutationUpdateMenuArgs = {
  input: UpdateMenuInput;
};


export type MutationUpdateMerchantArgs = {
  input: UpdateMerchantInput;
};


export type MutationUpdateMobileArgs = {
  input: UpdateMobileInput;
};


export type MutationUpdateOptionTypeArgs = {
  input: UpdateOptionTypeInput;
};


export type MutationUpdateOptionValueArgs = {
  input: UpdateOptionValueInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};


export type MutationUpdateQuoteArgs = {
  input: UpdateQuoteInput;
};


export type MutationUpdateSalePriceArgs = {
  input: UpdateSalePriceInput;
};


export type MutationUpdateShippingCategoryArgs = {
  input: UpdateShippingCategoryInput;
};


export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


export type MutationUpdateSmsTemplateArgs = {
  input: UpdateSmsTemplateInput;
};


export type MutationUpdateStockItemArgs = {
  input: UpdateStockItemInput;
};


export type MutationUpdateStockLocationArgs = {
  input: UpdateStockLocationInput;
};


export type MutationUpdateTaxonArgs = {
  input: UpdateTaxonInput;
};


export type MutationUpdateTrackArgs = {
  input: UpdateTrackInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVariantArgs = {
  input: UpdateVariantInput;
};


export type MutationUpdateVendorArgs = {
  input: UpdateVendorInput;
};


export type MutationUpdateWebsiteArgs = {
  input: UpdateWebsiteInput;
};


export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};


export type MutationVerifyTruckArgs = {
  input: VerifyTruckInput;
};

export type OptionType = BaseModelInterface & {
  __typename?: 'OptionType';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  optionValues: OptionValueConnection;
  presentation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type OptionTypeOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for OptionType. */
export type OptionTypeConnection = {
  __typename?: 'OptionTypeConnection';
  /** A list of edges. */
  edges: Array<OptionTypeEdge>;
  /** A list of nodes. */
  nodes: Array<OptionType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionTypeEdge = {
  __typename?: 'OptionTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<OptionType>;
};

export type OptionTypeFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  presentation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type OptionTypeInput = {
  name: Scalars['String']['input'];
  presentation?: InputMaybe<Scalars['String']['input']>;
};

export type OptionValue = BaseModelInterface & {
  __typename?: 'OptionValue';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  optionType: OptionType;
  optionTypeId: Scalars['ID']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  presentation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for OptionValue. */
export type OptionValueConnection = {
  __typename?: 'OptionValueConnection';
  /** A list of edges. */
  edges: Array<OptionValueEdge>;
  /** A list of nodes. */
  nodes: Array<OptionValue>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OptionValueEdge = {
  __typename?: 'OptionValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<OptionValue>;
};

export type OptionValueFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  optionTypeId?: InputMaybe<IdFilter>;
  position?: InputMaybe<IntFilter>;
  presentation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type OptionValueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  optionTypeId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  presentation: Scalars['String']['input'];
};

export type Order = BaseModelInterface & {
  __typename?: 'Order';
  adjustmentTotal: Scalars['Float']['output'];
  billAddress?: Maybe<Address>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  flag?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  itemCount: Scalars['Int']['output'];
  itemTotal: Scalars['Float']['output'];
  items: Array<Item>;
  number: Scalars['String']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  paymentStatus: Scalars['String']['output'];
  paymentTotal: Scalars['Float']['output'];
  payments: Array<Payment>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  products: Array<Product>;
  shipAddress?: Maybe<Address>;
  shipmentStatus: Scalars['String']['output'];
  shipmentTotal: Scalars['Float']['output'];
  shipments: Array<Shipment>;
  shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  shippingCategories: Array<ShippingCategory>;
  status: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
  total: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  variants: Array<Variant>;
  website: Website;
  websiteId: Scalars['ID']['output'];
};

/** The connection type for Order. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** A list of nodes. */
  nodes: Array<Order>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Order>;
};

export type OrderFilter = {
  cancelledAt?: InputMaybe<DateFilter>;
  completedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  paidAt?: InputMaybe<DateFilter>;
  paymentStatus?: InputMaybe<EnumStringFilter>;
  shipmentStatus?: InputMaybe<EnumStringFilter>;
  shippedAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
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

export type Payment = BaseModelInterface & {
  __typename?: 'Payment';
  accountNo?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  bankName?: Maybe<Scalars['String']['output']>;
  capturedBy?: Maybe<User>;
  capturedById?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['ID']['output']>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodId?: Maybe<Scalars['ID']['output']>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  responseCode?: Maybe<Scalars['String']['output']>;
  responseMessage?: Maybe<Scalars['String']['output']>;
  source?: Maybe<PaymentSource>;
  sourceId?: Maybe<Scalars['ID']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type PaymentMethod = BaseModelInterface & {
  __typename?: 'PaymentMethod';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  testMode: Scalars['Boolean']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for PaymentMethod. */
export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** A list of edges. */
  edges: Array<PaymentMethodEdge>;
  /** A list of nodes. */
  nodes: Array<PaymentMethod>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PaymentMethodEdge = {
  __typename?: 'PaymentMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PaymentMethod>;
};

/** Payment Method */
export enum PaymentMethodEnum {
  /** CashOnDelivery */
  CashOnDelivery = 'cash_on_delivery',
  /** Merchant */
  QPay = 'q_pay'
}

export type PaymentMethodFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type PaymentSource = QpaySource;

export type Price = BaseModelInterface & {
  __typename?: 'Price';
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  default: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  unit: Unit;
  unitId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant: Variant;
  variantId: Scalars['ID']['output'];
};

/** The connection type for Price. */
export type PriceConnection = {
  __typename?: 'PriceConnection';
  /** A list of edges. */
  edges: Array<PriceEdge>;
  /** A list of nodes. */
  nodes: Array<Price>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PriceEdge = {
  __typename?: 'PriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Price>;
};

export type Product = BaseModelInterface & {
  __typename?: 'Product';
  approved: Scalars['Boolean']['output'];
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['ID']['output']>;
  condition: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentListing?: Maybe<Listing>;
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageObjects: Array<Attachment>;
  images: Array<Scalars['String']['output']>;
  imagesWithId: Array<Scalars['JSON']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  listingIds: Array<Scalars['ID']['output']>;
  listings: Array<Listing>;
  master: Variant;
  name?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  optionTypes: Array<OptionType>;
  optionValues: Array<OptionValue>;
  price: Scalars['Int']['output'];
  productProperties: Array<ProductProperty>;
  properties: Array<Property>;
  published: Scalars['Boolean']['output'];
  shippingCategoryId?: Maybe<Scalars['ID']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variants: Array<Variant>;
  variantsWithMaster: Array<Variant>;
  vendorId: Scalars['ID']['output'];
};


export type ProductImagesArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};


export type ProductImagesWithIdArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  productCat?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendorId?: InputMaybe<IdFilter>;
};

export type ProductInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductProperty = BaseModelInterface & {
  __typename?: 'ProductProperty';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  product: Product;
  productId: Scalars['ID']['output'];
  property: Property;
  propertyId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type Property = BaseModelInterface & {
  __typename?: 'Property';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  presentation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type QpaySource = BaseModelInterface & {
  __typename?: 'QpaySource';
  bankList?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  invoiceId?: Maybe<Scalars['String']['output']>;
  qrCode?: Maybe<Scalars['String']['output']>;
  qrImage?: Maybe<Scalars['String']['output']>;
  qrUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Quarter = BaseModelInterface & {
  __typename?: 'Quarter';
  createdAt: Scalars['ISO8601DateTime']['output'];
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zip?: Maybe<Scalars['String']['output']>;
};

/** The connection type for Quarter. */
export type QuarterConnection = {
  __typename?: 'QuarterConnection';
  /** A list of edges. */
  edges: Array<QuarterEdge>;
  /** A list of nodes. */
  nodes: Array<Quarter>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type QuarterEdge = {
  __typename?: 'QuarterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Quarter>;
};

export type QuarterFilter = {
  createdAt?: InputMaybe<DateFilter>;
  districtId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Array<CabAddress>>;
  application?: Maybe<Application>;
  applications: ApplicationConnection;
  assetRole: AssetRole;
  assetRoles: AssetRoleConnection;
  brand: Brand;
  brands: BrandConnection;
  currentOrder?: Maybe<Order>;
  districts: DistrictConnection;
  dynamicPage?: Maybe<DynamicPage>;
  dynamicPages?: Maybe<DynamicPageConnection>;
  listings: ListingConnection;
  mailTemplates: MailTemplateConnection;
  me?: Maybe<User>;
  menu: Menu;
  menus: MenuConnection;
  merchants: MerchantConnection;
  optionTypes: OptionTypeConnection;
  optionValues: OptionValueConnection;
  order?: Maybe<Order>;
  orders: OrderConnection;
  page?: Maybe<DynamicPage>;
  pages: DynamicPageConnection;
  paymentMethods: PaymentMethodConnection;
  prices: PriceConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  quarters: QuarterConnection;
  quotes: QuoteConnection;
  salePrices: SalePriceConnection;
  shippingCategories: ShippingCategoryConnection;
  shippingMethods: ShippingMethodConnection;
  sms: SmsConnection;
  smsTemplates: SmsTemplateConnection;
  states: StateConnection;
  stockItems: StockItemConnection;
  stockLocation: StockLocation;
  stockLocations: StockLocationConnection;
  taxon?: Maybe<Taxon>;
  taxonFlat?: Maybe<Scalars['JSON']['output']>;
  taxons: TaxonConnection;
  units: UnitConnection;
  user?: Maybe<User>;
  userAddresses: UserAddressConnection;
  users: UserConnection;
  variant: Variant;
  variants: VariantConnection;
  vendor?: Maybe<Vendor>;
  vendorUser?: Maybe<VendorUser>;
  vendorUsers: VendorUserConnection;
  vendors: VendorConnection;
  website?: Maybe<Website>;
  websites: WebsiteConnection;
  zones: ZoneConnection;
};


export type QueryAddressArgs = {
  filterId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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


export type QueryCurrentOrderArgs = {
  number?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDistrictsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DistrictFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDynamicPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDynamicPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DynamicPageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMailTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MailTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryOptionTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryOptionValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OptionValueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DynamicPageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPricesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryQuartersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuarterFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySalePricesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShippingCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySmsTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SmsTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStockItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryStockLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStockLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockLocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryTaxonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUnitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ZoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type Quote = BaseModelInterface & {
  __typename?: 'Quote';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant?: Maybe<Variant>;
  variantSku?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Website>;
  websiteName?: Maybe<Scalars['String']['output']>;
};

/** The connection type for Quote. */
export type QuoteConnection = {
  __typename?: 'QuoteConnection';
  /** A list of edges. */
  edges: Array<QuoteEdge>;
  /** A list of nodes. */
  nodes: Array<Quote>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type QuoteEdge = {
  __typename?: 'QuoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Quote>;
};

export type QuoteFilter = {
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variantId?: InputMaybe<IdFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type SalePrice = BaseModelInterface & {
  __typename?: 'SalePrice';
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  dateFrom?: Maybe<Scalars['ISO8601DateTime']['output']>;
  dateTo?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  unit?: Maybe<Unit>;
  unitId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant: Variant;
  variantId: Scalars['ID']['output'];
};

/** The connection type for SalePrice. */
export type SalePriceConnection = {
  __typename?: 'SalePriceConnection';
  /** A list of edges. */
  edges: Array<SalePriceEdge>;
  /** A list of nodes. */
  nodes: Array<SalePrice>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SalePriceEdge = {
  __typename?: 'SalePriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SalePrice>;
};

export type Shipment = BaseModelInterface & {
  __typename?: 'Shipment';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['ID']['output']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  claimedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  cost: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  distance?: Maybe<Scalars['Float']['output']>;
  driver?: Maybe<User>;
  id: Scalars['ID']['output'];
  inventoryUnits?: Maybe<Array<InventoryUnit>>;
  number: Scalars['String']['output'];
  order: Order;
  orderId: Scalars['ID']['output'];
  shippedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  shippingRates?: Maybe<Array<ShippingRate>>;
  status: Scalars['String']['output'];
  stockLocation?: Maybe<StockLocation>;
  stockLocationId?: Maybe<Scalars['ID']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for Shipment. */
export type ShipmentConnection = {
  __typename?: 'ShipmentConnection';
  /** A list of edges. */
  edges: Array<ShipmentEdge>;
  /** A list of nodes. */
  nodes: Array<Shipment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Shipment>;
};

export type ShipmentFilter = {
  claimedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ShippingCategory = BaseModelInterface & {
  __typename?: 'ShippingCategory';
  active: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for ShippingCategory. */
export type ShippingCategoryConnection = {
  __typename?: 'ShippingCategoryConnection';
  /** A list of edges. */
  edges: Array<ShippingCategoryEdge>;
  /** A list of nodes. */
  nodes: Array<ShippingCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShippingCategoryEdge = {
  __typename?: 'ShippingCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ShippingCategory>;
};

export type ShippingCategoryFilter = {
  active?: InputMaybe<BoolFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type ShippingMethod = BaseModelInterface & {
  __typename?: 'ShippingMethod';
  calculatorAttributes?: Maybe<Scalars['JSON']['output']>;
  calculatorType?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  shippingCategories: Array<ShippingCategory>;
  shippingCategoryIds: Array<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zoneIds: Array<Scalars['ID']['output']>;
  zones: Array<Zone>;
};

/** The connection type for ShippingMethod. */
export type ShippingMethodConnection = {
  __typename?: 'ShippingMethodConnection';
  /** A list of edges. */
  edges: Array<ShippingMethodEdge>;
  /** A list of nodes. */
  nodes: Array<ShippingMethod>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShippingMethodEdge = {
  __typename?: 'ShippingMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ShippingMethod>;
};

export type ShippingMethodFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ShippingRate = BaseModelInterface & {
  __typename?: 'ShippingRate';
  cost: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  selected: Scalars['Boolean']['output'];
  shipment: Shipment;
  shipmentId: Scalars['ID']['output'];
  shippingMethod: ShippingMethod;
  shippingMethodId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Sms = BaseModelInterface & {
  __typename?: 'Sms';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  operator?: Maybe<Scalars['String']['output']>;
  scheduledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  sourceId?: Maybe<Scalars['Int']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Sms. */
export type SmsConnection = {
  __typename?: 'SmsConnection';
  /** A list of edges. */
  edges: Array<SmsEdge>;
  /** A list of nodes. */
  nodes: Array<Sms>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SmsEdge = {
  __typename?: 'SmsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Sms>;
};

export type SmsTemplate = BaseModelInterface & {
  __typename?: 'SmsTemplate';
  content: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for SmsTemplate. */
export type SmsTemplateConnection = {
  __typename?: 'SmsTemplateConnection';
  /** A list of edges. */
  edges: Array<SmsTemplateEdge>;
  /** A list of nodes. */
  nodes: Array<SmsTemplate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SmsTemplateEdge = {
  __typename?: 'SmsTemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<SmsTemplate>;
};

export type SmsTemplateFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
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

export type State = BaseModelInterface & {
  __typename?: 'State';
  abbr?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  districts: Array<District>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for State. */
export type StateConnection = {
  __typename?: 'StateConnection';
  /** A list of edges. */
  edges: Array<StateEdge>;
  /** A list of nodes. */
  nodes: Array<State>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StateEdge = {
  __typename?: 'StateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<State>;
};

export type StateFilter = {
  abbr?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type StockItem = BaseModelInterface & {
  __typename?: 'StockItem';
  backorderable: Scalars['Boolean']['output'];
  countOnHand: Scalars['Int']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  stockLocation: StockLocation;
  stockLocationId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variant: Variant;
  variantId: Scalars['ID']['output'];
};

/** The connection type for StockItem. */
export type StockItemConnection = {
  __typename?: 'StockItemConnection';
  /** A list of edges. */
  edges: Array<StockItemEdge>;
  /** A list of nodes. */
  nodes: Array<StockItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StockItemEdge = {
  __typename?: 'StockItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<StockItem>;
};

export type StockItemFilter = {
  backorderable?: InputMaybe<BoolFilter>;
  countOnHand?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  stockLocationId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  variantId?: InputMaybe<IdFilter>;
};

export type StockItemInput = {
  backorderable: Scalars['Boolean']['input'];
  countOnHand: Scalars['Int']['input'];
  stockLocationId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type StockLocation = BaseModelInterface & {
  __typename?: 'StockLocation';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stockItems: Array<StockItem>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variants: VariantConnection;
  vendor: Vendor;
  vendorId: Scalars['ID']['output'];
};


export type StockLocationVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for StockLocation. */
export type StockLocationConnection = {
  __typename?: 'StockLocationConnection';
  /** A list of edges. */
  edges: Array<StockLocationEdge>;
  /** A list of nodes. */
  nodes: Array<StockLocation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StockLocationEdge = {
  __typename?: 'StockLocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<StockLocation>;
};

export type StockLocationFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  vendorId?: InputMaybe<IdFilter>;
};

export type StockLocationInput = {
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
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

export type Taxon = BaseModelInterface & {
  __typename?: 'Taxon';
  children?: Maybe<Array<Taxon>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hasChildren: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn?: Maybe<Scalars['String']['output']>;
  prettyName?: Maybe<Scalars['String']['output']>;
  prettyNameEn?: Maybe<Scalars['String']['output']>;
  products: ProductConnection;
  productsCount: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  website?: Maybe<Website>;
  websiteId?: Maybe<Scalars['ID']['output']>;
};


export type TaxonProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for Taxon. */
export type TaxonConnection = {
  __typename?: 'TaxonConnection';
  /** A list of edges. */
  edges: Array<TaxonEdge>;
  /** A list of nodes. */
  nodes: Array<Taxon>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaxonEdge = {
  __typename?: 'TaxonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Taxon>;
};

export type TaxonFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lft?: InputMaybe<IntFilter>;
  listingsCount?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<IdFilter>;
  prettyName?: InputMaybe<StringFilter>;
  rgt?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  website?: InputMaybe<WebsiteFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

export type TaxonInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  prettyName?: InputMaybe<Scalars['String']['input']>;
  prettyNameEn?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

export type TaxonInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  prettyName?: InputMaybe<Scalars['String']['input']>;
  prettyNameEn?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

export type Tracking = BaseModelInterface & {
  __typename?: 'Tracking';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  truck: Truck;
  truckId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

/** The connection type for Tracking. */
export type TrackingConnection = {
  __typename?: 'TrackingConnection';
  /** A list of edges. */
  edges: Array<TrackingEdge>;
  /** A list of nodes. */
  nodes: Array<Tracking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TrackingEdge = {
  __typename?: 'TrackingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Tracking>;
};

export type Truck = BaseModelInterface & {
  __typename?: 'Truck';
  active: Scalars['Boolean']['output'];
  brandId?: Maybe<Scalars['ID']['output']>;
  busy: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  licenseBack?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['ID']['output']>;
  number: Scalars['String']['output'];
  photos: Array<Scalars['String']['output']>;
  plate?: Maybe<Scalars['String']['output']>;
  trackedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  trackings: TrackingConnection;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  verified: Scalars['Boolean']['output'];
};


export type TruckTrackingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Truck. */
export type TruckConnection = {
  __typename?: 'TruckConnection';
  /** A list of edges. */
  edges: Array<TruckEdge>;
  /** A list of nodes. */
  nodes: Array<Truck>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TruckEdge = {
  __typename?: 'TruckEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Truck>;
};

export type Unit = BaseModelInterface & {
  __typename?: 'Unit';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  prices: Array<Price>;
  product: Product;
  productId: Scalars['ID']['output'];
  salePrices: Array<SalePrice>;
  subUnit: Product;
  subUnitId: Scalars['ID']['output'];
  subUnitValue?: Maybe<Scalars['Int']['output']>;
  unit: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variants: Array<Variant>;
};

/** The connection type for Unit. */
export type UnitConnection = {
  __typename?: 'UnitConnection';
  /** A list of edges. */
  edges: Array<UnitEdge>;
  /** A list of nodes. */
  nodes: Array<Unit>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UnitEdge = {
  __typename?: 'UnitEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Unit>;
};

export type User = BaseModelInterface & {
  __typename?: 'User';
  assetRoles: AssetRoleConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickName?: Maybe<Scalars['String']['output']>;
  orders: OrderConnection;
  role: Scalars['String']['output'];
  roleMatrix?: Maybe<Scalars['JSON']['output']>;
  shipments: ShipmentConnection;
  trackings: TrackingConnection;
  trucks: TruckConnection;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  vendorUsers: VendorUserConnection;
  vendors: VendorConnection;
  verifications: VerificationConnection;
};


export type UserAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type UserShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShipmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTrackingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTrucksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserVendorUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserVendorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserVerificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAddress = BaseModelInterface & {
  __typename?: 'UserAddress';
  address: Address;
  createdAt: Scalars['ISO8601DateTime']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
};

/** The connection type for UserAddress. */
export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  /** A list of edges. */
  edges: Array<UserAddressEdge>;
  /** A list of nodes. */
  nodes: Array<UserAddress>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<UserAddress>;
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
  mobile?: InputMaybe<IntFilter>;
  nickName?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Variant = BaseModelInterface & {
  __typename?: 'Variant';
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  depth?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  imageObjects: Array<Attachment>;
  images: Array<Scalars['String']['output']>;
  imagesWithId: Array<Scalars['JSON']['output']>;
  isMaster: Scalars['Boolean']['output'];
  merchantSku?: Maybe<Scalars['String']['output']>;
  netWeight?: Maybe<Scalars['Float']['output']>;
  optionValues: Array<OptionValue>;
  optionsText?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  prices: Array<Price>;
  product: Product;
  productId: Scalars['ID']['output'];
  sale: Scalars['Boolean']['output'];
  salePrice: Scalars['Float']['output'];
  salePrices: Array<SalePrice>;
  sellingPrice: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  totalOnHand?: Maybe<Scalars['Int']['output']>;
  units: Array<Unit>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type VariantImagesArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};


export type VariantImagesWithIdArgs = {
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
  barcode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchantSku?: InputMaybe<StringFilter>;
  optionsText?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  productId?: InputMaybe<IdFilter>;
  salePrice?: InputMaybe<IntFilter>;
  sku?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type VariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  optionValues: Array<Scalars['ID']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['ID']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type VariantMassImageInput = {
  images: Array<Scalars['Upload']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type Vendor = BaseModelInterface & {
  __typename?: 'Vendor';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  registerNum: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  variants: Array<Variant>;
  variantsWithMaster: Array<Variant>;
  vendorUsers: VendorUserConnection;
};


export type VendorVendorUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  registerNum?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type VendorUser = BaseModelInterface & {
  __typename?: 'VendorUser';
  addedById?: Maybe<Scalars['ID']['output']>;
  assetRoles: AssetRoleConnection;
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
  userId: Scalars['ID']['output'];
  vendor: Vendor;
  vendorId: Scalars['ID']['output'];
};


export type VendorUserAssetRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
  vendor?: InputMaybe<VendorFilter>;
  vendorId?: InputMaybe<IdFilter>;
};

export type Verification = BaseModelInterface & {
  __typename?: 'Verification';
  createdAt: Scalars['ISO8601DateTime']['output'];
  driverLicense?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  passportBack?: Maybe<Scalars['String']['output']>;
  passportFront?: Maybe<Scalars['String']['output']>;
  selfie?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  verifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

/** The connection type for Verification. */
export type VerificationConnection = {
  __typename?: 'VerificationConnection';
  /** A list of edges. */
  edges: Array<VerificationEdge>;
  /** A list of nodes. */
  nodes: Array<Verification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VerificationEdge = {
  __typename?: 'VerificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Verification>;
};

export type Website = BaseModelInterface & {
  __typename?: 'Website';
  createdAt: Scalars['ISO8601DateTime']['output'];
  domain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['String']['output'];
  listings: ListingConnection;
  mailTemplates: MailTemplateConnection;
  merchants: MerchantConnection;
  name: Scalars['String']['output'];
  order?: Maybe<Order>;
  orders: OrderConnection;
  pages: DynamicPageConnection;
  shippingCategories: ShippingCategoryConnection;
  shippingMethods: ShippingMethodConnection;
  sms: SmsConnection;
  smsTemplates: SmsTemplateConnection;
  taxons: TaxonConnection;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zones: ZoneConnection;
};


export type WebsiteListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ListingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteMailTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MailTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};


export type WebsiteOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type WebsitePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DynamicPageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteShippingCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteSmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteSmsTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SmsTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type WebsiteTaxonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxonFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type WebsiteZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ZoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
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

export type Zone = BaseModelInterface & {
  __typename?: 'Zone';
  countries: Array<Country>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  districts: Array<District>;
  id: Scalars['ID']['output'];
  kind: Scalars['String']['output'];
  membersCount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  quarters: Array<Quarter>;
  stateIds?: Maybe<Array<Scalars['String']['output']>>;
  states: Array<State>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Zone. */
export type ZoneConnection = {
  __typename?: 'ZoneConnection';
  /** A list of edges. */
  edges: Array<ZoneEdge>;
  /** A list of nodes. */
  nodes: Array<Zone>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ZoneEdge = {
  __typename?: 'ZoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Zone>;
};

export type ZoneFilter = {
  countryId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  districtId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  kind?: InputMaybe<StringFilter>;
  membersCount?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  quarterId?: InputMaybe<IdFilter>;
  stateId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  websiteId?: InputMaybe<IdFilter>;
};

/** Autogenerated input type of acceptMerchant */
export type AcceptMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of activateTruck */
export type ActivateTruckInput = {
  active: Scalars['Boolean']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of addEmployee */
export type AddEmployeeInput = {
  addedBy: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of addImageDynamicPage */
export type AddImageDynamicPageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
  pageId: Scalars['ID']['input'];
};

/** Autogenerated return type of addImageDynamicPage */
export type AddImageDynamicPagePayload = {
  __typename?: 'addImageDynamicPagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of addMassImageVariant */
export type AddMassImageVariantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  images: Array<VariantMassImageInput>;
};

/** Autogenerated input type of addProductImage */
export type AddProductImageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['Upload']['input']>;
  productId: Scalars['ID']['input'];
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of addToCart */
export type AddToCartInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<CartItemInput>;
  number?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of addVariantImage */
export type AddVariantImageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['Upload']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of addVariant */
export type AddVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  optionValues: Array<Scalars['ID']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['ID']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
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

/** Autogenerated input type of cancelOrder */
export type CancelOrderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
};

/** Autogenerated input type of checkoutCart */
export type CheckoutCartInput = {
  billAddress?: InputMaybe<AddressInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  shippingAddress?: InputMaybe<AddressInput>;
  shippingAddressId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of checkoutPayment */
export type CheckoutPaymentInput = {
  action: PaymentMethodEnum;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated input type of claimShipment */
export type ClaimShipmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
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
  /** Asset id */
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
  cover?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of createDynamicPage */
export type CreateDynamicPageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['JSON']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  /** Website ID */
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createListing */
export type CreateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  merchantId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of createMailTemplate */
export type CreateMailTemplateInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  mjml?: InputMaybe<Scalars['Boolean']['input']>;
  mjmlTemplate?: InputMaybe<Scalars['String']['input']>;
  reply?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
  textTemplate?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createMenu */
export type CreateMenuInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createOptionType */
export type CreateOptionTypeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  presentation: Scalars['String']['input'];
};

/** Autogenerated input type of createOptionValue */
export type CreateOptionValueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  optionTypeId: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
  presentation: Scalars['String']['input'];
};

/** Autogenerated input type of createPaymentMethod */
export type CreatePaymentMethodInput = {
  active: Scalars['Boolean']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  testMode?: InputMaybe<Scalars['Boolean']['input']>;
  type: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createProduct */
export type CreateProductInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of createProductTaxon */
export type CreateProductTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  taxonId: Scalars['ID']['input'];
};

/** Autogenerated input type of createProperty */
export type CreatePropertyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  presentation: Scalars['String']['input'];
};

/** Autogenerated input type of createQuote */
export type CreateQuoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of createSalePrice */
export type CreateSalePriceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  unitId?: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

/** Autogenerated input type of createShippingCategory */
export type CreateShippingCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createShippingMethod */
export type CreateShippingMethodInput = {
  calculatorAttributes: Scalars['JSON']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  public: Scalars['Boolean']['input'];
  shippingCategoryIds: Array<Scalars['ID']['input']>;
  websiteId: Scalars['ID']['input'];
  zoneIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated input type of createSmsTemplate */
export type CreateSmsTemplateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createStockItem */
export type CreateStockItemInput = {
  backorderable: Scalars['Boolean']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countOnHand: Scalars['Int']['input'];
  stockLocationId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

/** Autogenerated input type of createStockLocation */
export type CreateStockLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of createTaxon */
export type CreateTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  prettyName?: InputMaybe<Scalars['String']['input']>;
  prettyNameEn?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of createTruck */
export type CreateTruckInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  license: Scalars['Upload']['input'];
  licenseBack: Scalars['Upload']['input'];
  modelId?: InputMaybe<Scalars['ID']['input']>;
  number: Scalars['String']['input'];
  photos?: InputMaybe<Array<Scalars['Upload']['input']>>;
  plate: Scalars['Upload']['input'];
};

/** Autogenerated input type of createUserAddress */
export type CreateUserAddressInput = {
  addressAttributes: AddressInput;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of createUser */
export type CreateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of createVendor */
export type CreateVendorInput = {
  address: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  registerNum: Scalars['String']['input'];
  website: Scalars['String']['input'];
};

/** Autogenerated input type of createWebsite */
export type CreateWebsiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domain: Scalars['String']['input'];
  index: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated input type of createZone */
export type CreateZoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  stateIds: Array<Scalars['ID']['input']>;
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of deleteProductImage */
export type DeleteProductImageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

/** Autogenerated input type of deleteVariantImage */
export type DeleteVariantImageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

/** Autogenerated input type of deliverShipment */
export type DeliverShipmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
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
  /** AssetRole id to remove */
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyDynamicPage */
export type DestroyDynamicPageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyEmployee */
export type DestroyEmployeeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Employee id to remove */
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyMailTemplate */
export type DestroyMailTemplateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyMenu */
export type DestroyMenuInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyPaymentMethod */
export type DestroyPaymentMethodInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyProductTaxon */
export type DestroyProductTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  taxonId: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyProperty */
export type DestroyPropertyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyQuote */
export type DestroyQuoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroySalePrice */
export type DestroySalePriceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyShippingCategory */
export type DestroyShippingCategoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyShippingMethod */
export type DestroyShippingMethodInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroySmsTemplate */
export type DestroySmsTemplateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyStockItem */
export type DestroyStockItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyStockLocation */
export type DestroyStockLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyTaxon */
export type DestroyTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyUserAddress */
export type DestroyUserAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of destroyZone */
export type DestroyZoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of emptyCart */
export type EmptyCartInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of findOrCreateBrand */
export type FindOrCreateBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  cover?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of findOrCreateOptionType */
export type FindOrCreateOptionTypeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  presentation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of findOrCreateOptionValue */
export type FindOrCreateOptionValueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  optionTypeId: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
  presentation: Scalars['String']['input'];
};

/** Autogenerated input type of findOrCreateProduct */
export type FindOrCreateProductInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated input type of findOrCreateProductTaxon */
export type FindOrCreateProductTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  taxon?: InputMaybe<TaxonInputType>;
  taxonId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of findOrCreateStockItem */
export type FindOrCreateStockItemInput = {
  backorderable: Scalars['Boolean']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countOnHand: Scalars['Int']['input'];
  stockLocationId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

/** Autogenerated input type of findOrCreateStockLocation */
export type FindOrCreateStockLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of findOrCreateVariant */
export type FindOrCreateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  optionValues: Array<Scalars['ID']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['ID']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated input type of inviteMerchant */
export type InviteMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of massCreateListing */
export type MassCreateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  merchantId: Scalars['ID']['input'];
  productIds: Array<MassListingProductInput>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of massFindOrCreateBrand */
export type MassFindOrCreateBrandInput = {
  brands: Array<BrandInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of massFindOrCreateOptionType */
export type MassFindOrCreateOptionTypeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  optionTypes: Array<OptionTypeInput>;
};

/** Autogenerated input type of massFindOrCreateOptionValue */
export type MassFindOrCreateOptionValueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  optionValues: Array<OptionValueInput>;
};

/** Autogenerated input type of massFindOrCreateProduct */
export type MassFindOrCreateProductInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  products: Array<ProductInput>;
};

/** Autogenerated input type of massFindOrCreateStockItem */
export type MassFindOrCreateStockItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  stockItems: Array<StockItemInput>;
};

/** Autogenerated input type of massFindOrCreateStockLocation */
export type MassFindOrCreateStockLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  stockLocations: Array<StockLocationInput>;
};

/** Autogenerated input type of massFindOrCreateTaxon */
export type MassFindOrCreateTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  taxons: Array<TaxonInput>;
};

/** Autogenerated input type of massFindOrCreateVariant */
export type MassFindOrCreateVariantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  variants: Array<VariantInput>;
};

/** Autogenerated input type of payOrder */
export type PayOrderInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
  paymentMethod: PaymentMethodEnum;
};

/** Autogenerated input type of performOrderAction */
export type PerformOrderActionInput = {
  action: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of performOrderAction */
export type PerformOrderActionPayload = {
  __typename?: 'performOrderActionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of removeItem */
export type RemoveItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of removeListing */
export type RemoveListingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

/** Autogenerated input type of removeProduct */
export type RemoveProductInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** Autogenerated input type of removeVariant */
export type RemoveVariantInput = {
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

/** Autogenerated input type of sendTracking */
export type SendTrackingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};

/** Autogenerated input type of setAsDefaultUserAddress */
export type SetAsDefaultUserAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of shipShipment */
export type ShipShipmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Shipping code */
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of syncListings */
export type SyncListingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
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
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Asset Role id to update */
  id: Scalars['ID']['input'];
  /** roles */
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated input type of updateBrand */
export type UpdateBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of updateDynamicPage */
export type UpdateDynamicPageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  items?: InputMaybe<Scalars['JSON']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateEmployee */
export type UpdateEmployeeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateItem */
export type UpdateItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateListing */
export type UpdateListingInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  taxonIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of updateMailTemplate */
export type UpdateMailTemplateInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mjml?: InputMaybe<Scalars['Boolean']['input']>;
  mjmlTemplate?: InputMaybe<Scalars['String']['input']>;
  reply?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
  textTemplate?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateMenu */
export type UpdateMenuInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateMerchant */
export type UpdateMerchantInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  vendorId: Scalars['ID']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Autogenerated input type of updateMobile */
export type UpdateMobileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mobile: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of updateOptionType */
export type UpdateOptionTypeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  presentation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateOptionValue */
export type UpdateOptionValueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  optionTypeId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  presentation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updatePaymentMethod */
export type UpdatePaymentMethodInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  testMode?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productCat?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  shippingCategoryId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateProperty */
export type UpdatePropertyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  presentation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateQuote */
export type UpdateQuoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateSalePrice */
export type UpdateSalePriceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  unitId?: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

/** Autogenerated input type of updateShippingCategory */
export type UpdateShippingCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateShippingMethod */
export type UpdateShippingMethodInput = {
  calculatorAttributes?: InputMaybe<Scalars['JSON']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shippingCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  zoneIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of updateSmsTemplate */
export type UpdateSmsTemplateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

/** Autogenerated input type of updateStockItem */
export type UpdateStockItemInput = {
  backorderable?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countOnHand?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  stockLocationId?: InputMaybe<Scalars['ID']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateStockLocation */
export type UpdateStockLocationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['ID']['input'];
};

/** Autogenerated input type of updateTaxon */
export type UpdateTaxonInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
  prettyName?: InputMaybe<Scalars['String']['input']>;
  prettyNameEn?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of updateTrack */
export type UpdateTrackInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  license?: InputMaybe<Scalars['Upload']['input']>;
  licenseBack?: InputMaybe<Scalars['Upload']['input']>;
  modelId?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<Scalars['Upload']['input']>>;
  plate?: InputMaybe<Scalars['Upload']['input']>;
};

/** Autogenerated input type of updateUser */
export type UpdateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateVariant */
export type UpdateVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  optionValues?: InputMaybe<Array<Scalars['ID']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
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

/** Autogenerated input type of updateWebsite */
export type UpdateWebsiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  index?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateZone */
export type UpdateZoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  kind?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of verifyOTP */
export type VerifyOtpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of verifyTruck */
export type VerifyTruckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  verified: Scalars['Boolean']['input'];
};
