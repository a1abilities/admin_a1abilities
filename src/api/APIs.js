import axios from 'axios';
import * as c from './config/Constants';
import checkError from './config/HttpClient';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: { 'content-type': 'application/json',},  
});

export default {

  submitContact:async ({...payload }) => {

    const URL = `${c.API_CONSUMER}/api/mail/submitContact`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  addFormContent:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/addFormContent`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  updateFormContent:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/updateFormContent`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },


  getServicesList:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getServicesList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  getWyusList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getWhyusList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

getAboutList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getAboutList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},


getContactList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getContactList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

getGoalsList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getGoalsList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

getTechnologyList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getTechnologyList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

getPartnersList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getPartnersList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

getPortfolioList:async ({...payload }) => {
  const URL = `${c.API_CONSUMER}/api/getPortfolioList`;
  try {
    const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {
      data: payload,
    }),
  );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
},

};

