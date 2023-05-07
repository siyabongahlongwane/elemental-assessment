    // Set Carousel Data
    const carouselData = [{
            path: "slide-1.png",
            text: "look beyond the ordinary"
        },
        {
            path: "slide-2.png",
            text: "we aspire to inspire"
        },
        {
            path: "slide-3.png",
            text: "we can and we will"
        },
        {
            path: "slide-4.png",
            text: "we leave no stone unturned"
        }
    ]
    let folderDir = "../assets/images"
    let slide = $("#slide");
    let slideText = $("#slide-text");
    let slideIndex = 0;

    // Set Default Slide Image and Text
    const setCarouselData = () => {
        slide.css("background-image", `url(${folderDir}/${carouselData[slideIndex]['path']})`);
        slideText.html(`${carouselData[slideIndex]['text']}`);
    }

    $(document).ready(setCarouselData());

    // Go to the next slide
    const next = () => {
        slideIndex = slideIndex == carouselData.length - 1 ? 0 : ++slideIndex;
        console.log('next slide', slideIndex);

        slide.css("background-image", `url(${folderDir}/${carouselData[slideIndex]['path']})`);
        slideText.html(`${carouselData[slideIndex]['text']}`);

    }