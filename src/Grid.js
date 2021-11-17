import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tiles = () => {
  const history = useNavigate();
  const name = 'video-editing';
  const title = 'photography';
  const title2 = 'graphic-design';

  return (
    <section className="min-h-screen w-screen mt-10 ">
      <div className="w-[80vw] mx-auto bg-gray-100 flex flex-col md:grid grid-cols-2 grid-rows-2 h-full gap-4 text-gray-50 ">
        <div
          className=" row-span-2 h-[250px] md:h-[400px] shadow-2xl rounded-lg border  flex items-center justify-center text-center leading-10 relative bg-video bg-contain object-cover cursor-pointer animate-leftIn "
          // eslint-disable-next-line max-len
          // long line of JavaScript …
          onClick={() => history(`featured/${name}`)}
        >
          <h1 className="uppercase bg-indigo-800/70 px-2 tracking-wider text-2xl rounded-lg ">
            video shooting <span className="block">& editing</span>
          </h1>
        </div>
        <div
          className="  h-[250px] md:h-[190px] shadow-2xl rounded-lg border  flex items-center justify-center bg-photography bg-contain object-cover cursor-pointer animate-rightIn "
          onClick={() => history(`featured/${title}`)}
        >
          <h1 className="uppercase bg-indigo-800/70 px-2 tracking-wider text-2xl rounded-lg bg-photography bg-cover  object-cover ">
            photography
          </h1>
        </div>
        <div
          className="  h-[250px] md:h-[190px] shadow-2xl rounded-lg border  flex items-center justify-center bg-graphics2 bg-contain object-cover cursor-pointer animate-rightIn"
          onClick={() => history(`featured/${title2}`)}
        >
          <h1 className="uppercase bg-indigo-800/70 px-2 tracking-wider text-2xl rounded-lg ">
            graphic design
          </h1>
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center gap-2 justify-center sm:justify-between w-[80vw] mx-auto my-8 py-10 ">
        <div className="flex">
          <div className="min-h-[250px] md:max-w-[280px]  bg-gray-300 flex items-center md:flex-col py-3">
            <div className="h-2/3 w-1/2 rounded-full mt-6  md:pt-0   ">
              <img
                src="/imgs/passionate.png"
                alt="passionate"
                className="md:h-full object-cover md:w-3/4 w-1/2 h-5/6 mx-auto rounded-full"
              />
            </div>
            <div className=" flex flex-col items-start justify-between w-3/4">
              <h1 className="text-xl font-semibold text-center py-5">
                passionate
              </h1>
              <p className="px-3 text-center text-sm">
                Each project starts with an indepth brand reaserch to ensure we
                produce with insight, furthermore we merge art , design and
                techologies into an exciting new solution
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="min-h-[250px] md:max-w-[280px]  bg-gray-300 flex  md:flex-col items-center py-3">
            <div className="h-2/3 w-1/2 rounded-full mt-6  md:pt-0    ">
              <img
                src="/imgs/resourcefull2.png"
                alt="resourcefull"
                className="md:h-full object-cover md:w-3/4 w-1/2 h-5/6 mx-auto rounded-full"
              />
            </div>
            <div className=" flex flex-col items-start justify-between w-3/4">
              <h1 className="text-xl font-semibold text-center py-5">
                resourcefull
              </h1>
              <p className="px-3 text-center text-sm">
                Everthing we do is stratigic, we prefer an agile approach in all
                of our projects and we value customer collaboration. It
                guarantees supirial and fulfilling results our customers demand.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="min-h-[250px] md:max-w-[280px]  bg-gray-300 flex items-center md:flex-col py-3">
            <div className="h-2/3 w-1/2 rounded-full mt-6  md:pt-0 ">
              <img
                src="/imgs/friendl.png"
                alt="friendly"
                className="md:h-full object-cover md:w-3/4 w-1/2 h-5/6 mx-auto rounded-full"
              />
            </div>
            <div className=" flex flex-col items-start justify-between w-3/4">
              <h1 className="text-xl font-semibold text-center py-5">
                friendly
              </h1>
              <p className="md:px-3 pr-5 md:text-center text-left text-sm">
                We are an enthusiastic team who know how to put our clients
                first. Our success depends on our customers , and we strive to
                give them the best experience during creative process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tiles;
