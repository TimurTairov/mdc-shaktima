import React from 'react'

const Donate = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-screen">
      <h1 className="text-2xl ml-2">Пожертвовать на развитие Дхарма центра</h1>
      <div className="ml-2">
        <h1 className="text-xl mt-2">Ю-Money</h1>

        <iframe
          title="108r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=aejT5wRP1vY.230410&"
          width="330"
          height="50"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        />
        <iframe
          title="540r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=y4lXeQOxU8o.230415&"
          width="330"
          height="50"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        />

        <iframe
          title="1080r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=SGusHwIOHgo.230412&"
          width="330"
          height="50"
          frameBorder="0"
          allowtransparency="true"
          scrolling="no"
        />
      </div>
    </div>
  )
}

export default Donate
