export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skrSjYP9qGyjjFBjD2d5jnAFRv45JjmJO4mzfMywP1VS57LmYzULrbjH1gvTjsTOTUcPMu30AW5s93qQYdQFfHkfnOESWBT0icX4ATOJikQxnTEf6p76j65Lu7YWvNha6jMnnZAwyeOBgYTmS8o5sE9nWxva31U2VXTz9ICmHjGkoK5i10Lz",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
