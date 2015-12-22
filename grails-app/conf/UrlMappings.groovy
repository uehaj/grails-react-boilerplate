class UrlMappings {

	static mappings = {
        "/api/books/$action?/$id?(.$format)?"{
          controller = 'book'
        }

        // Do not show index.gsp
        //        "/"(redirect:"/index.gsp")
        "500"(view:'/error')
	}
}
