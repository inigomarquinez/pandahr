const fetchAllEmployees = async (): Promise<any> =>
  await fetch(`${process.env.REACT_APP_BACKEND_URL ?? ''}/employees`)
    .then(handleErrors)
    .then(async (res) => await res.json());

const fetchEmployeeByEmail = async (email: string): Promise<any> =>
  await fetch(
    `${process.env.REACT_APP_BACKEND_URL ?? ''}/employees?email=${email}`
  )
    .then(handleErrors)
    .then(async (res) => await res.json());

const fetchAllSkills = async (): Promise<any> =>
  await fetch(`${process.env.REACT_APP_BACKEND_URL ?? ''}/skills`)
    .then(handleErrors)
    .then(async (res) => await res.json());

const fetchPeerFeedbacks = async (userId: number): Promise<any> =>
  await fetch(
    `${process.env.REACT_APP_BACKEND_URL ?? ''}/peerFeedbacks?userId=${userId}`
  )
    .then(handleErrors)
    .then(async (res) => await res.json());

const handleErrors = (response: Response): Response => {
  if (!response.ok) {
    alert(response.statusText);
  }
  return response;
};

const api = {
  fetchAllEmployees,
  fetchEmployeeByEmail,
  fetchAllSkills,
  fetchPeerFeedbacks,
};

export default api;
