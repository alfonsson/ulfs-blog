import Image from 'next/image'

export default function Profile(props) {
    return(
    <>
    <Image
        priority
        src="/posts/img/profile.png"
        className='rounded-full pt-3'
        height={140}
        width={140}
        alt="text"
    />
    </>
    )
}