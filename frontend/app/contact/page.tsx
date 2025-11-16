import BasicEnquiries from "@/components/BasicEnquiries";
import FollowIcons from "@/components/FollowIcons";
import FormDailog from "@/components/FormDailog";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationArrow,
  faLocationDot,
  faNoteSticky,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <main className="bg-background text-foreground pt-16 px-10 flex flex-col justify-center items-center w-full min-h-screen">
      <section className="text-center w-full py-5">
        <Heading
          title="Contact"
          subtitle="Contact info is here if need anything let us know"
        />
      </section>
      <section className="flex flex-col md:flex-row lg:flex-row w-full justify-center items-center gap-10 py-10">
        <div className="max-w-md w-full flex flex-col justify-center items-center gap-2 p-5 rounded-2xl shadow-lg bg-card text-card-foreground">
          <div className="flex items-center justify-baseline gap-5 w-full border-b pb-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="bg-primary text-primary-foreground p-2 rounded-sm text-lg"
            />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-muted-foreground">
                Rameswaram, Tamilnadu
              </p>
            </div>
          </div>

          <div className="flex items-center justify-baseline gap-5 w-full border-b pb-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-primary text-primary-foreground p-2 rounded-sm text-lg"
            />
            <div>
              <p className="font-semibold">Booking Enquiries</p>
              <p className="text-sm text-muted-foreground">+91 8056503191</p>
            </div>
          </div>

          <div className="flex items-center justify-baseline gap-5 w-full border-b pb-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="bg-primary text-primary-foreground p-2 rounded-sm text-lg"
            />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">
                saravananharish143@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-baseline gap-5 w-full border-b pb-3">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="bg-primary text-primary-foreground p-2 rounded-sm text-lg"
            />
            <div>
              <p className="font-semibold">Social Media</p>
              <FollowIcons />
            </div>
          </div>

          <div className="flex items-center justify-baseline gap-5 w-full">
            <Button className="text-sm">Feedback</Button>
            <div>
              <BasicEnquiries />
            </div>
          </div>
        </div>
        <div className="h-80 max-w-lg w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15750.528243866269!2d79.11501572796335!3d9.277130579271596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01eeb115eda4c3%3A0xd742c88b407846dd!2sMandapam%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2snl!4v1761728568945!5m2!1sen!2snl"
            width="100%"
            height="100%"
            className="border-0 rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
};
export default Contact;
