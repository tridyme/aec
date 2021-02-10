const fs = require('fs');
const request = require('request-promise');
const SectionGeometry = require('./calculations/SectionGeometry');
const SteelCalculation = require('./calculations/SteelCalculation');
const WaveCalculation = require('./calculations/WaveCalculation');
const WindCalculation = require('./calculations/WindCalculation');


module.exports = {
  SectionGeometry,
  SteelCalculation,
  WaveCalculation,
  WindCalculation
};

const sectionList = [
  { D: 219.1, t: 12.5 },
  { D: 219.1, t: 10 },
  { D: 168.3, t: 8 },
  { D: 168.3, t: 5 },
  { D: 139.7, t: 5 },
  { D: 139.7, t: 4 },
  { D: 76.1, t: 2.9 },
  { D: 60.3, t: 2.9 },
  { D: 48.3, t: 2.9 },
  { D: 168, t: 6.3 },
  { D: 139, t: 4 },
  { D: 101, t: 6.3 },
  { D: 88, t: 5 },
  { D: 76, t: 2.9 },
  { D: 60, t: 2.9 },
  { D: 60, t: 5 },
  { D: 33, t: 2.6 },
  { D: 26, t: 2.3 },
  { D: 21, t: 2.3 },
  { D: 42, t: 2.6 },
];

const getSectionData = async() => {
  let sectionDataList = [];
  await sectionList.map(async (section, index) => {
    const {
      D,
      t
    } = section;
    const SectionAnalysis = new SectionGeometry[`CircularHollowSection`]({ D: D/1000, t: t/1000 });
    const sectionext = await SectionAnalysis.sectionext;
    const sectionint = await SectionAnalysis.sectionint;
    const sendOptions = {
      method: 'POST',
      uri: `http://localhost:7500/sectionData`,
      body: { sectionext, sectionint },
      json: true
    }
    let returnData;
    await request(sendOptions).then(function (parsedBody) {
      returnData = parsedBody; // do something with this data, here I'm assigning it to a variable.
      console.log('returnData: ', returnData);
    }).catch(function (err) {
      console.log('Code Aster Section Data Connection :', err);
    });



    const sectionData = {
      ...section,
      ...SectionAnalysis.sectionAnalysis,
      id: 10 + index,
      type: "CircularHollowSection",
      materialType: "steel",
      name: `CHS-${D}x${t}`,
      yg: returnData.YG,
      zg: returnData.ZG,
      alpha: returnData.ALPHA,
      A: returnData.A,
      Iy: returnData.IYG,
      Iz: returnData.IZG,
      Iyz: returnData.IYZ,
      Jx: returnData.JX,
      Jg: returnData.JG,
      ymax: returnData.ZMAX, // avec alpha = 90?? Ymax devient Zmax
      ymin: returnData.ZMIN,
      zmax: returnData.YMAX,
      zmin: returnData.YMIN,
      rmax: returnData.RMAX,
      ytot: returnData.ZMAX - returnData.ZMIN,
      ztot: returnData.YMAX - returnData.ZMIN,
      Ay: returnData.AY,
      Az: returnData.AZ,
      Ry: returnData.RY,
      Rz: returnData.RZ,
      Rt: returnData.RT,
      Ey: returnData.EY,
      Ez: returnData.EZ,
    }
    sectionDataList.push(sectionData);
  });
  const data = JSON.stringify(sectionDataList, null, 4);
  try {
    fs.writeFileSync('sectionDataList.json', data);
    console.log("JSON data is saved.");
  } catch (error) {
      console.error(err);
  }
}

getSectionData();