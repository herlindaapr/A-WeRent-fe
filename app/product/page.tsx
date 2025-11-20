import { BiChevronLeft, BiSolidStar } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div
      className="bg-white text-black"
    >

      {/* # navbar */}
      <div
        className="w-full bg-white py-3.5 px-7 text-black"
      >
        <BiChevronLeft className="text-[24px]" />
      </div>

      {/* image */}
      <div
        className="relative w-full h-[647px]"
      >
        <Image 
          src="/image/image%2011.png"
          fill
          alt="product-image"
          className="object-cover"
        />
      </div>

      {/* product title and review count */}
      <div
        className="flex flex-col bg-white items-start text-black py-[18px] px-[30px] text-[18px] font-semibold leading-[15px]"
      >

        {/* product title */}
        <div>
          <span>Black Kaftan with <br /> Embellishment</span>
        </div>

        {/* review */}
        <div
          className="flex flex-row items-center justify-start gap-[11px] bg-white text-black py-[18px]"
        >

          {/* stars */}
          <div
            className="flex flex-row gap-2"
          >
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>

          {/* review count */}
          <div>
            <span className="text-[9px] text-base font-normal">7 Reviews</span>
          </div>

        </div>

      </div>

      <hr />

      {/* review overview */}
      <div
        className="flex flex-col px-[30px] py-[13px] gap-[18px]"
      >

        {/* review text and view more link */}
        <div
          className="flex flex-row items-center justify-between"
        >
          <span className=" text-[14px] font-bold">REVIEWS (7)</span>
          <Link href="#" className="underline">View More &gt;</Link>
        </div>

        <div>
          {/* stars */}
          <div className="flex flex- text-[12px] gap-2">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
        </div>

        <div
          className=""
        >
          {/* rating */}
          <div
            className="flex flex-col gap-3.5 text-[12px] w-full"
          >
            <div
              className="flex flex-row items-center justify-between gap-4"
            >
              <div
                className="w-3/12"
              >
                <span>Small</span>
              </div>
              <div
                className="flex w-8/12 bg-[#D9D9D9] h-[9px]"
              >
                
              </div>
              <div
                className="flex items-center justify-end w-1/12"
              >
                <span>2%</span>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-between gap-4"
            >
              <div
                className="w-3/12"
              >
                <span>True to Size</span>
              </div>
              <div
                className="flex w-8/12 bg-[#D9D9D9] h-[9px]"
              >
                
              </div>
              <div
                className="flex items-center justify-end w-1/12"
              >
                <span>85%</span>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-between gap-4"
            >
              <div
                className="w-3/12"
              >
                <span>Large</span>
              </div>
              <div
                className="flex w-8/12 bg-[#D9D9D9] h-[9px]"
              >
                
              </div>
              <div
                className="flex items-center justify-end w-1/12"
              >
                <span>13%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product price */}
      <div
        className="flex flex-row items-start justify-between bg-white px-3.5 py-[11px] text-black"
      >
        <div
          className="flex flex-col"
        >
          <span>Rent Fee</span>
          <span className="font-semibold">Rp 300.000/4 Day</span>
        </div>
        <div>
          <button
            className="px-[53px] py-4 bg-[#CDAA44] rounded-sm"
          >
            ADD
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductPage