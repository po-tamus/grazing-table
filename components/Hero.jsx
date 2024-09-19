import background from "@components/assets/food.jpeg"

export default function Hero () {
    
    const backgroundPicture = {
        // background image is saved in public (dir)
        // is public dir used by default?
        backgroundImage: "url(./backgroundNew.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "120vh",
      }
    
    return (
        // <div style={backgroundPicture}>
        //     <h1 className="head_text text-center mb-3">
        //   Grazing Table
        //   <br className="max-md:hidden" />
        //   <span className="orange_gradient text-center"> Eat The Fucking Food, Bitch</span>
        //   </h1>
        //   <h3 className="font-playfair text-center">
        //     Grazing Table is a gourmet catering group specializing in artisan platters and cheese boards.
        //   </h3>
        // </div>

        <div style={backgroundPicture}>
          <section>
            <h1 className="head_text text-center mb-3">
          GRAZING TABLE
          </h1>
          <h3 className="font-forum text-white text-center text-[25px]">
            Grazing Table is a gourmet catering group specializing in artisan platters and cheese boards.
          </h3>
          </section>
        </div>
    );
}