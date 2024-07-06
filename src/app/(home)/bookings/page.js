import ProfileInfo from "@/components/user/ProfileInfo";
import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/database/queries/users";
import { getBookingsByUser } from "@/database/queries/bookings";

const BookingsPage = async () => {
    const session = await auth();
    
    if(!session){
        redirect("/login");
    }

    const loggedUser = await getUserByEmail(session?.user?.email);
    const bookings = await getBookingsByUser(loggedUser?.id);

    const pastBooking = bookings.filter((booking)=>{
        return ( new Date().getTime() > new Date(booking.checkin).getTime());
    })

    const upcomingBooking = bookings.filter((booking)=>{
        return ( new Date().getTime() < new Date(booking.checkin).getTime());
    })

    console.log(bookings);

    return (
        <>
            <section className="mt-[100px]">
                <div className="container">
                    <ProfileInfo />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking bookings={pastBooking} />
                        <UpcomingBooking bookings={upcomingBooking} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookingsPage;
