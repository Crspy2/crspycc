interface Metadata {
    size: number,
    filename: string,
    extension: string,
    mime_sype: string,
}

interface Image {
    path: string,
    metadata: Metadata
}

interface INFO {
    type: string,
    required: boolean,
    label: string,
}

interface Warranty {
    preferredUnit: string,
    text: string,
    time: number
}

interface Badge {
    text: string,
    color: string,
    text_color: string
}

interface FAQ {
    question: string,
    answer: string
}

interface Settings {
    redirect_url: string,
    video_url: string,
    product_title: string,
    product_description: string,
    call_to_action: string,
    hide_image: boolean,
    badge: Badge,
    faq: FAQ,
}

interface Discount {
    minimum_purchase_amount: number,
    discount_percentage: number,
}

interface ProductData {
    serials: string[],
    removeDuplicate: boolean,
    comment: string,
    file: string,
    webhook: string,
    stock: number,
}

interface Deliverable {
    types: string[],
    data: ProductData,
    delivery_text: string
}

interface Price {
    price: number,
    currency: string,
}

interface ChargeFrequency {
    value: number,
    interval: string
}

export interface Product {
    id: number,
    title: string,
    slug: string,
    description: string,
    images: Image[],
    order: number,
    visibility: string,
    additional_information: INFO
    warranty: Warranty,
    other_settings: Settings,
    deleted_at: BigInt,
    created_at: BigInt,
    updated_at: BigInt,
    store_id: number,
    category_id: number,
    section_id: number,
    section_order: number,
    is_discoverable: number,
    bulk_discount: Discount,
    deliverable: Deliverable,
    minimum_purchase_quantity: number,
    maximum_purchase_quantity: number,
    price: Price,
    pricing_type: string,
    charge_frequency: ChargeFrequency,
    humble: boolean,
    payment_methods: string[],
    url: string
}

export interface CrspyProduct {
    id: number,
    title: string,
    store_id: number,
    imagePath: string
}