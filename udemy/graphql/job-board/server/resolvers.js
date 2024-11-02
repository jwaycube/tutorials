import {GraphQLError} from 'graphql'
import {getJob, getJobs, getJobsByCompany, createJob, deleteJob, updateJob} from './db/jobs.js'
import {getCompany} from './db/companies.js'

export const resolvers = {
  Query: {
    company: async (_root, {id}) => {
        const company = await getCompany(id)
        if (!company) {
            throw notFoundError("No company found with id " + id)
        }
        return company;
    },
    job: async (_root, {id}) => {
        const job = await getJob(id)
        if (!job) {
            throw notFoundError("No job found with id " + id)
        }
        return job;
    },
    jobs: () => {
      console.log("Test test")
      return getJobs()}
      ,
  },
  Mutation: {
    createJob: (_root, {input: {title, description} }, { user } ) => {
      console.log(user)
      if (!user) {
        throw unauthorizedError('Missing authentication')
      }
      const companyId = user.companyId
      return createJob({companyId, title, description})
    },
    deleteJob: async (_root, {id}, { user }) => {
      if (!user) {
        throw unauthorizedError('Missing authentication')
      }
      const job = await deleteJob(id, user.companyId)
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job
    },
    updateJob: async (_root, {input: {id, title, description}}, { user }) => {
      const companyId = user.companyId
      const job = await updateJob({id, title, description, companyId})
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job
    }
  },
  Company: {
    jobs: (company) => getJobsByCompany(company.id)
  },
  // resolver function will always take precedence
  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt)
  }
};

function toIsoDate(value) {
    return value.slice(0, 'yyyy-mm-dd'.length);
}

function notFoundError(message) {
  return new GraphQLError(message, 
      {extensions: {code: 'NOT_FOUND'}}
  )
}

function unauthorizedError(message) {
  return new GraphQLError(message, 
      {extensions: {code: 'UNAURTHOISED'}}
  )
}