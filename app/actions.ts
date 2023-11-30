'use server'

export async function getFromEnvLocal() {
  return process.env.SERVER_LOCAL_VAR;
}

export async function getFromEnvProductionLocal() {
  return process.env.SERVER_PRODUCTION_LOCAL_VAR;
}

export async function getFromEnvProduction() {
  return process.env.SERVER_PRODUCTION_VAR;
}


