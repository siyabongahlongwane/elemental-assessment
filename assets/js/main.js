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
    ];

    let folderDir = "../assets/images"
    let slide = $("#slide");
    let slideText = $("#slide-text");
    let carousel = $("#carousel");
    let slideIndex = 0;

    // Set Default Slide Image and Text
    const setCarouselData = (slideIndex) => {
        slide.attr("src", `${folderDir}/${carouselData[slideIndex]['path']}`);
        slideText.html(`${carouselData[slideIndex]['text']}`);
    }

    $(document).ready(() => {
        setCarouselData(0);
        toggleTrackingIcons();
    });

    // Go to the next slide
    const next = () => {
        slide.animate({ opacity: '0.3', })
        slideIndex = slideIndex == carouselData.length - 1 ? 0 : ++slideIndex;
        console.log(slideIndex)
        setTimeout(() => slide.animate({ opacity: '1' }), 150)
        slide.attr("src", `${folderDir}/${carouselData[slideIndex]['path']}`);
        slideText.html(`${carouselData[slideIndex]['text']}`);
        toggleTrackingIcons();
    }

    const toggleTrackingIcons = () => {
        resetChildElements();
        carouselData.forEach((currentSlide, index) => {
            let img = $('<img />', {
                id: `slide-${index}`,
                class: index == slideIndex ? 'pointer active-slide' : 'pointer',
                src: index == slideIndex ? `${folderDir}/active.png` : `${folderDir}/inactive.png`,
                width: index == slideIndex ? '20px' : '15px',
            });

            img.appendTo($('#trackerIcons'));
        })
    }

    const resetChildElements = () => {
        let parent = document.querySelector("#trackerIcons");
        let child = parent.lastElementChild;
        while (child) {
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    }