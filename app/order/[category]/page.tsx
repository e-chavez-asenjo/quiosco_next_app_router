import { prisma } from "@/src/lib/prisma"
import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"

async function getProducts(category: string) {
  const prodcuts = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })

  return prodcuts
}



export default async function orderPage({params} : {params: {category: string}}) {
  const products = await getProducts(params.category)
  return (
    <>
    <Heading>
      Elige y personaliza tu pedido a continuación
    </Heading>
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-4 items-start">
      {products.map(product => (
        <ProductCard 
        key={product.id}
        product={product}
        />
      ))}
    </div>
    </>
  )
}
