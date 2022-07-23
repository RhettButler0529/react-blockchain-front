import images from "../constants/images";

const IntroWithImage = () => {
    return (
        <section className='dark:bg-[#200A4C]'>
            <div className='lg:px-2 pt-5 pb-5 lg:pt-5 flex flex-row gap-6 items-center justify-center space-y-3 md:space-y-0'>

                <div className='w-full lg:w-[600px] h-24 '>
                    <img src={images.Bitcoin1} alt=""
                        className='w-full h-full object-cover rounded-lg' />
                </div>

                <div className='w-full lg:w-[600px] h-24'>
                    <img src={images.Bitcoin2} alt=""
                        className='w-full h-full object-cover rounded-lg' />
                </div>

            </div>

        </section>
    )
}

export default IntroWithImage;