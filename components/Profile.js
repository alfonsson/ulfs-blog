import Image from 'next/image'

export default function Profile(props) {
    return(
    <>
    <Image
        priority
        src="/img/gbg-smal.jpg"
        className='rounded pt-3'
        height={200}
        width={1000}
        alt=""
    />
    </>
    )
}