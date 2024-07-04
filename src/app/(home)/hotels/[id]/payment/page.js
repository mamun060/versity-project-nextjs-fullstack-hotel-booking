import PaymentForm from "@/components/payment/PaymentForm"
import { auth } from "../../../../../../auth";
import { redirect } from "next/navigation"
import { getUserByEmail } from "@/database/queries/users";
import { getHotelById } from "@/database/queries/hotels";
import { getDayDifference } from "@/utils/data-utils";

const PaymentPage = async ({params: {id}, searchParams:{checkin, checkout}}) => {

  const session = await auth();
  if(!session){
    redirect("/login")
  }

  const loggedUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id , checkin, checkout);
  
  const hasCheckinCheckout = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2 ;

  if(hasCheckinCheckout){
    const days = getDayDifference(checkin , checkout);
    cost = days * cost;
  }


  return (  
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
            You have picked <b>{hotelInfo?.name}
            </b> and total price is <b>
            ${cost}
            </b>
            {hasCheckinCheckout && `for ${getDayDifference(checkin , checkout)}`} day(s)
        </p>
        <PaymentForm
          loggedUser={loggedUser}
          hotelInfo={hotelInfo} 
          checkin={checkin} 
          checkout={checkout} 
        />
      </div>
    </section>
  )
}

export default PaymentPage