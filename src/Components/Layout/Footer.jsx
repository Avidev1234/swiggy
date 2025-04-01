export const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto bg-gray-200 flex justify-center">
        <div className="w-[72%] mx-auto  flex justify-between gap-[15px] p-4">
          <div className="w-[15%] flex flex-col gap-2">
            <div>
              <img src="../../src/assets/footer/footer.svg" alt="" />
            </div>
            <div>
              <p>&copy; 2025 Avidev Jha</p>
            </div>
          </div>

          <div>
            <strong>company</strong>
            <div className="w-full flex flex-col gap-4 mt-2">
              <div>About Us</div>
              <div>Swiggy Corporate</div>
              <div>Careers</div>
              <div>Team</div>
              <div>Swiggy One</div>
              <div>Swiggy Instamart</div>
              <div>Swiggy Dineout</div>
              <div>Swiggy Genie</div>
              <div>Minis</div>
              <div>Pyng</div>
            </div>
          </div>
          <div>
            <strong>contact us</strong>
            <div className="w-full flex flex-col gap-4 mt-2">
              <div>Help & Support</div>
              <div>Partner with us</div>
              <div>Ride with us</div>
              <div className="mt-[85px]">
                <strong>Legal</strong>
              </div>
              <div>Terms & Conditions</div>
              <div>Cookies Poilcy</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div>
            <strong>Available in:</strong>
            <div className="w-full flex flex-col gap-4 mt-2">
              <div>Bangalore</div>
              <div>Gurgaon</div>
              <div>Hydrabad</div>
              <div>Delhi</div>
              <div>Mumbai</div>
              <div>Pune</div>
              
            </div>
          </div>
          <div>
            <strong>Life at Swiggy</strong>
            <div className="w-full flex flex-col gap-4 mt-2">
              <div>Explore with Swiggy</div>
              <div>Swiggy News</div>
              <div>Snackables</div>
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
