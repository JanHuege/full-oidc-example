package de.example

import java.security.Principal
import javax.annotation.security.RolesAllowed
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.Context
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.SecurityContext

@Path("/api/user")
class UserResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed("ROLE_USER")
    fun getPrincipal(@Context sec: SecurityContext): Principal {
        return sec.userPrincipal
    }
}