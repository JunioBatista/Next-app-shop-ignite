import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe"

async function handler (req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'POST') {
        return res.status(405).json({error: 'Methdod not allowed.'})
    }

    const { priceId } = req.body

    if(!priceId) {
        return res.status(400).json({error: 'Price not found.'})
    }

    const successURL = `${process.env.NEXT_BASE_URL}/success`
    const cancelURL = process.env.NEXT_BASE_URL


    const checkoutSession = await stripe.checkout.sessions.create({
        
        success_url:successURL,
        cancel_url:cancelURL,

        mode:'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    })

    return res.status(200).json({
        checkoutUrl: checkoutSession.url,
    })

}

export default handler