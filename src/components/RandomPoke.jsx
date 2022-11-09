import React from 'react'





const RandomPoke = () => {
  const { pokes } = useLoaderData();
  console.log(pokes)
  return (
    <div>RandomPoke</div>

  )
}

export default RandomPoke