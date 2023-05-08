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
    const next = (indx) => {
        if (indx) {
            slideIndex = indx;
        } else if (slideIndex == carouselData.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex += 1;
        }
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
            img.on("click", function() {
                next(index);
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

    // function initCardData() {
    //     // Card Data
    //     const cardData = [{
    //             icon: `${folderDir}/arrow-right.png`,
    //             text: 'the visio',
    //             span: 'difference'
    //         },
    //         {
    //             icon: `${folderDir}/arrow-right.png`,
    //             text: 'meet the',
    //             span: 'visio team'
    //         },
    //         {
    //             icon: `${folderDir}/arrow-right.png`,
    //             text: 'our funds and',
    //             span: 'investments'
    //         }
    //     ];

    //     cardData.forEach((currentCard, index) => {
    //         let img = $('<div></div>', {
    //             id: `slide-${index}`,
    //             class: index == slideIndex ? 'pointer active-slide' : 'pointer',
    //             // src: index == slideIndex ? `${folderDir}/active.png` : `${folderDir}/inactive.png`,
    //             // width: index == slideIndex ? '20px' : '15px',
    //         });
    //         img.on("click", function() {
    //             next(index);
    //         });
    //         img.appendTo($('#trackerIcons'));
    //     })
    // }

    document.querySelector("#trackerIcons").addEventListener("click", next)