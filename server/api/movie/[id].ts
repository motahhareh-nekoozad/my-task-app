export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  return await $fetch(`https://ylnk.site/test/?action=info&id=${id}`)
})