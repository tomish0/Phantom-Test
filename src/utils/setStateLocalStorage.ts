// function to simulataneously update the correct state & add into local storage

export function setStateLocalStorage(
  value: any,
  localStorageKey: string,
  setState: React.SetStateAction<any>
) {
  localStorage.setItem(localStorageKey, JSON.stringify(value));

  setState(value);
}
