import { connectToDatabase } from "@utils/database"
import Menu from "@models/Menu"

export const GET = async (request) => {
    try {
        // this function is successfully being called
        await connectToDatabase()

        const menus = await Menu.find({});
        
        console.log(menus);

        return new Response(JSON.stringify(menus), { status: 200 })

    } catch(err) {
        return new Response("Failed to fetch menus", { status: 500 })
    }
}