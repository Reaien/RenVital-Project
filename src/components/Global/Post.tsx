import profilePic from "../../assets/images/profile-pic.png";
type Props = {};

function Post({}: Props) {
  return (
    <>
      <section className="flex justify-center my-24">
        <div className="max-md:mx-10 w-[720px] min-h-[400px] rounded-xl shadow-xl border-2">
          <div className="grid grid-cols-4 gap-1 md:gap-0 md:grid-cols-8 m-4 h-[70px] items-center">
            <div>
              {/*Profile pic */}
              <img
                className="rounded-full w-16"
                src={profilePic}
                alt="profilePic"
              />
            </div>
            {/*Info user */}
            <div className="col-span-3 md:col-span-7">
              <div className="flex gap-7 items-center">
                <p className="font-bold">Iván Duarte Herrera</p>
                {/*Rol user */}
                <p className="text-white bg-emerald-700 rounded-lg text-xs md:text-base px-3 md:px-9">
                  Paciente
                </p>
              </div>
              <p>Hace 1 Día</p>
            </div>
          </div>
          {/*Titulo Post */}
          <div className="grid grid-cols-1 m-4">
            <p className="font-bold text-lg">Titulo de la publicación</p>
          </div>
          {/*Post */}
          <div className="grid grid-cols-1 m-4">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus explicabo suscipit quasi perspiciatis dignissimos
              magnam corrupti excepturi rem ad accusamus, nam quidem ea maxime
              quos beatae cupiditate earum nesciunt rerum?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
