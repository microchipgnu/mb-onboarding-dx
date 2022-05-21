import dynamic from 'next/dynamic'

const PreziComponent = dynamic(() => import('../components/Prezi'), {
  ssr: false,
})

const Prezi = () => {
  return <PreziComponent />
}

export default Prezi
