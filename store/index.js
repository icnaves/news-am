const store = {
	lang: 'rus',
}

export const getLang = () => { return store.lang }

export const setLang = (lng) => store.lang = lng