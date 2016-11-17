#The Native American Cultures Database
##Team
Edgar Martin del Campo, Jason Mosley, John Nowinsky
##Concept
The NACD is an open encyclopedia built on contributions from professional anthropologists and indigenous participants. Designed to MVC standards, it will use forms and POST routes to submit images, links, and text; and information will be retrieved through queries specified by GET methods. Search results will be organized in stacked snippets or thumbnails that may be clicked to expand content.
##Technology
Content will be stored in a MySQL database, with tables prepared for reference to ethnological fields, Native groups, media sources, and text content, respectively. The text content is the primary table, and each submission to this table will add supplementary materials to the other tables with Sequelize syntax. Commentary on Quechua food strategies, for example, will insert text to the content table and apply a hasMany method, to associate its entry with references to “subsistence” in the fields table and “Quechua” in the groups table.

With an API powered by the Reciprocal Research Network, the NACD will initialize its database with sample images and companion notes from 10 Andean ceramics in the University of British Columbia’s Museum of Anthropology and 10 Pacific Northwest masks in the American Museum of Natural History.

(API documentation is available at rrncommunity.org/api.)

The project will be using a new package for keyword searches; our current candidate is NPM sql-engine. We also aim to employ OAUTH for member login to modify specific data sets: insert, update, or delete.

Users may also register to save search results for future reference, which will be stored with Firebase per user account.
##Purpose
Inspired by Yale’s Human Resource and Area Files (HRAF), the NACD aims to provide an unprecedented multimedia approach to cross-cultural studies. It will use keyword searches and/or topic browsing to seek and compare relevant materials from one or different Native cultures. The NACD will be written with language accessible to specialist and layperson alike, to provide a powerful resource for research on cultural subjects.

While the HRAF has a critical engine for measuring the significance of cross-cultural comparison and a significant corpus of ethnographic literature, its Native American selection is limited, with few materials from the Natives themselves. The Reciprocal Research Network, founded by First Nations developers in British Columbia, integrates contributions from Native, museum, or academic researchers. However, its medium is principally photographs of artifacts provided by museum databases, with uneven cultural discussion of their relevance.

As the testing phase nears completion, we will begin to recruit content contributors. Drawing from existing affiliations, we hope to build partnerships with research institutions and indigenous communities in the Northeast, Texas, and Mexico.

The Native American Cultures Database creates a niche that will present text, image, and video from professional and indigenous participants. It seeks to provide Native voice and promote intercultural awareness.
