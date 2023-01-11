export function formDataFromObject<T extends object>(obj: T) {
  const formData = new FormData();

  for (const key of Object.keys(obj)) {
    formData.append(key, obj[key as keyof T] as string);
  }

  return formData;
}
