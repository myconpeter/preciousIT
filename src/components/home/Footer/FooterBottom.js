import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

const FooterBottom = () => {
	return (
		<div className='w-full bg-[#F5F5F3] group'>
			<div className='max-w-container mx-auto border-t-[1px] pt-10 pb-20'>
				<p className='text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm'>
					<span className='text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex'>
						<AiOutlineCopyright />
					</span>
					Copyright 2022 | SwiftBuy shopping | All Rights Reserved
				</p>

				<p className=' mt-2 text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm'>
					20/SC/CO/927
				</p>
				<p className='mt-2 text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm'>
					ETUK PRECIOUS ITORO
				</p>
				{/* Precious Name */}
			</div>
		</div>
	);
};

export default FooterBottom;
