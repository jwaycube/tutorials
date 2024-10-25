import {GraphQLError} from 'graphql'
import {getJob, getJobs, getJobsByCompany} from './db/jobs.js'
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
    jobs: () => getJobs(),
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