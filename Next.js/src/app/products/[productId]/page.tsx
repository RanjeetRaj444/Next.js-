import { Metadata } from 'next'
type Props = {
    params: {
        productId: string
    }
}

//changing project title dynamic according to productId form url.
// export const generateMetadata = ({ params }: Props): Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//     }
// }

// converting into async
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`,
    }
}
const ProductDetails = ({ params }: Props) => {
    return (
        <h1>ProductDetails page {params.productId}</h1>
    )
}

export default ProductDetails