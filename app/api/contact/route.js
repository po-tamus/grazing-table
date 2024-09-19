import Contact from "@models/Contact";
import { connectToDatabase } from "@utils/database";

export const POST = async (request) => {
    try {
        await connectToDatabase();

        const contacts = await Contact.find({});

        // const contacts = await Contact.find({});
        return new Response(JSON.stringify(contacts), { status: 200 });
    } catch(err) {
        return new Response("Failed to fetch menus", { status: 500 });
    }
}

/*
saga heard logan's voice - logan was complaining that saga let her go (this didn't actually happen)
saga said, "enough already", and pushed forward
again, keep going - knowing it will be difficult and you will make mistakes - its the only thing that 
will help.
I still don't understand completely, but I don't understand anything right now

- im worried i wont be able to get a job with current hiring conditions, skills of competition, 
and my poor memory/cognition. I need to have blind faith that things will work themselves out/I will
have the ability to achieve my goals if I regain good health.
- im frustrated that I keep forgetting everything I learn despite the amount of effort I give and
practice I do. Know that it is not normal to forget under these conditions of practicing. When I 
regain health...
- im feel poorly about myself that I don't always feel motivated to learn and work. It is very 
difficult to under my circumstances
- i keep forgetting how bad my situation is. It is hell. Others don't deal with this.
*/