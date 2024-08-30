import { imageFields } from "../imageFields";

export const authorFields = /* groq */ `
_type,
author_Image{
${imageFields}
},
section_theme,
author_Name,
author_Post,
company,   
`;
export const clientFields = /* groq */ `
_type,
clientImage{
${imageFields}
},
section_theme,
clientName,
clientLocation, 
`;
export const featuredPostFields = /* groq */ `
_type,
hero_image{
${imageFields}
},
publish_date, 
author->{
_type,
author_Name
}, 
banner_title, 
banner_desc,
slug,
`;

export const homeHeroSectionSectionFields = /* groq */ ` 
_type,
title,
title_image{
${imageFields}
},
start_project_button,
section_theme,
hero_title,
hero_description,
background_classname,
hero_image{
${imageFields}    
},
jamstack_developer_button,
bottom_description
`;
export const featuredCaseStudySectionFields = /* groq */ ` 
_type,
process_image{
${imageFields}
},
section_theme,
case_study_blog{
_type,
custom_rich_text    
},
core_web_title,
title_subtitle,
case_study_image{
${imageFields}
},
`;
export const sectionCourseTitleSectionFields = /* groq */ ` 
_type,
title_subtitle,
bookConsultationButton,
titleImage,
section_theme,
`;
export const caseStudySectionFields = /* groq */ ` 
_type,
author->{
${authorFields}
},
title_subtitle,
description,
case_study_img{
${imageFields}
},
section_title,
section_theme,
read_full_case_study_button
`;
export const testimonialsSectionFields = /* groq */ ` 
_type,
TestimonialsTitle,
section_theme,
testimonials_section,
TestimonialsDescription,
"testimonials" : *[_type == "testimonial"]{
title,
disable,
description{
_type,
custom_rich_text
},
client->{
${clientFields}
},
}
`;
export const blogTitleSectionFields = /* groq */ ` 
_type,
blog_button,
section_theme,
title_subtitle,
"blogs" :*[_type=="blog_detail_page" && defined(slug.current)][0...3]{
_type,
banner_title,
banner_desc,
hero_image{
${imageFields}
},
category[]->{
_type,
title,
slug,
},
slug,
}
`;
export const titleImageArraySectionFields = /* groq */ ` 
_type,
imagevariant,
image_array[]{
${imageFields}
},
section_theme
`;
export const customerReviewsSectionFields = /* groq */ `
_type,
title,
section_image{
${imageFields}
},
reviews[]{
_type,
rating,
review{
_type,
custom_rich_text
},
customer_image{
${imageFields}
},
}
`;
export const comparisionFrameworksSectionFields = /* groq */ ` 
compare_framework_section[]->{
_type,
title_subtitle,
button_label_compare,
section_theme,
content{
_type,
custom_rich_text
},
type->{
_type,
slug
},
"frameworks" : *[_type == "framework" && defined(slug.current) && references(^.type._ref)] | order(name asc){
_type,
name,
slug,
type{
_type,
type->{
_type,
slug
},
},
},
},
is_show,
_type,
title_subtitle,
variant
`;
export const priceSectionFields = /* groq */ `
_type,
title_subtitle,
section_theme,
pricing_section{
_type,
plan_discuss,
plan_navigation,
plans[]->{
_type,
label,
plan_name,
discount,
plan_services_template->{
_type,
title,
plan_services,
},
packages[]->{
_type,
package_title,
package_price_postfix,
package_price_value,
package_duration,
package_price_currency,
label,
popularity,
package_price_summary,
package_total_price,
package_details[]{
_type,
name,
isDivider,
type,
(type == "string")=>{
string
},
(type == "button")=>{
button
},
(type == "boolean")=>{
boolean_value
},
(type == "slider")=>{
slider_value
},
(type == "string_with_icon")=>{
string_with_icon{
_type,
name,
image{
${imageFields}
},
},
},
(type == "string_with_boolean")=>{
string_with_boolean{
_type,
name,
boolean,
},
},
(type =="string_with_tooltip")=>{
string_with_tooltip{
_type,
name,
tooltip_name{
_type,
custom_rich_text
},
tooltip_image{
_type,
asset->{...}
},
},
},             
},
},
},
},
`;
export const heroSectionCaseStudyDPAGEFields = /* groq */ `
_type,
section_title,
background_classname,
button,
image[]{
${imageFields}
},
section_theme,
description,
title,
`;
export const richTextWithRichTextCardSectionFields = /* groq */ ` 
_type,
definition_card_array[]{
_type,
custom_rich_text    
},
definition_rich_text{
_type,
custom_rich_text
},
section_theme
`;
export const imageTitleDescriptionArraySectionField = /* groq */ `
_type,
variant,
title_subtitle,
align,
background,
title_blogs[]{
_type,
title,
section_theme,
image{
${imageFields}
},
content{
_type,
custom_rich_text
},
},
section_theme,
`;
export const titleSubTitleImageSectionFields = /* groq */ ` 
_type,
title_subtitle,
content{
_type,
custom_rich_text
},
img{
${imageFields}
},
section_theme
`;
export const reviewsSectionFields = /* groq */ `
_type,
title,
reviews_image{
${imageFields}
},
book_free_consultation_button,
section_theme,
text_with_image{
_type,
custom_rich_text
},
description_rich_text{
_type,
custom_rich_text
},
`;
export const ourProcessSectionFields = /* groq */ `
_type,
section_theme,
title_subtitle,
variant,
image_title_array[]{
_type,
title,
our_process_image{
${imageFields}
},
},
`;
export const richTextIconSideImageSectionFields = /* groq */ `
_type,
title_subtitle,
section_description{
_type,
custom_rich_text
},
section_image{
${imageFields}
},
section_theme,
icon_lable_array[]{
_type,
icon_title,
icon_image{
${imageFields}
}
},
`;
export const faqSectionFields = /* groq */ `
_type,
title,
variant,
section_theme,
question_and_answer[]{
_type,
section_theme,
question,
answer{
_type,
custom_rich_text
},
"answerString" : pt::text(answer.custom_rich_text)
}
`;

export const bookConsultationFields = /* groq */ `
_type,
variant,
staff->{
_type,
staff_image{
${imageFields}
},
staff_name,
staff_post,
staff_content{
_type,
custom_rich_text,
},
},
content{
_type,
custom_rich_text,
},
section_image{
${imageFields}
},
section_theme
`;
export const techStackSectionFields = /* groq */ `
_type,
section_theme,
title_subtitle,
"frameworkTypes" : *[_type == "framework_type" && defined(slug.current)]{
 name,
 _type,
"frameworks" : *[_type == "framework" && defined(slug.current) && references(^._id)] | order(name asc){
name,
_type,
image{
${imageFields}
},
},
} 
`;
export const jamstackDevelopmentFields = /* groq */ `
_type,
section_theme,
image[]{
${imageFields}
},
title_description[]{
_type,
description,
title
},
title_subtitle
`;
export const titleDescriptionSideImageSectionFields = /* groq */ `
_type,
variant,
title_subtitle,
desc{
_type,
custom_rich_text
},
side_image{
${imageFields}
},
section_theme,
background,
`;
export const chooseJamstackySectionField = /* groq */ `
_type,
section_theme,
title_subtitle,
name,
media_icon[] {
_type,
process_image{
${imageFields}
},
section_theme,
lable,
},
`;
export const caseStudiesClientSectionFields = /* groq */ `
_type,
section_theme,
title_subtitle,
"caseStudies" : *[_type == "case_study_detail_page" && defined(slug.current)]|order(_createdAt desc)[0..1]{
_type,
project_overview{
_type,
title,
description{
_type,
custom_rich_text
},
},
project_year,
slug,
"heroSectionPreviewImage" : Section[_type=="hero_section_case_study_d_page"][0]{
_type,
image[0]{
${imageFields}
},
},
}
`;
export const errorImageFields = /* groq */ `
_type,
title,
sub_title,
error_image{
${imageFields}
}
`;
export const thankYouImageFields = /* groq */ `
_type,
thank_you_image{
${imageFields}
}
`;
export const heroSectionPrivacyPolicyFields = /* groq */ `
_type,
date,
title
`;
export const titleContentArrayFields = /* groq */ `
_type,
text_section[]{
_type,
content{
_type,
custom_rich_text
},
}
`;
export const developerProfileField = /* groq */ `
_type,
select_type_of_project,
hire_jamstack_development_button,
how_can_we_help_placeholder,
email_placeholder,
name_placeholder,
select_type_button,
title,
content{
_type,
custom_rich_text
},
image{
${imageFields}
},
section_theme,
`;
export const contactHeroSectionFields = /* groq */ `
_type,
section_theme,
title_subtitle,
section_description{
_type,
custom_rich_text
}
`;
export const contactInformationSectionFields = /* groq */ `
_type,
officeAddress{
_type,
addressTitle,
directions,
section_theme,
addressDescription{
_type,
custom_rich_text
},
},
contactUsCard[]{
_type,
section_image{
${imageFields}
},
section_description{
_type,
custom_rich_text
},
},
email,
officeTime{
_type,
title,
content{
_type,
custom_rich_text
},
},
phoneNumber,
section_theme,
`;
export const contactMessageSectionFields = /* groq */ `
_type,
sevicesDescription{
_type,
custom_rich_text
},
imageTitleSubtitleArray[]{
_type,
icon_title,
icon_image{
${imageFields}
},
icon_subtitle{
_type,
custom_rich_text
},
},
section_theme,
sevicesTitle,
section_description{
_type,
custom_rich_text  
},
title_subtitle,
ServicesButtonArray,
ContactMessageMainImage{
${imageFields}
},
contactForm{
_type,
Name,
email_placeholder,
message_placeholder,
companyName_placeholder,
section_theme,
title_subtitle,
email,
phone_number_placeholder,
name_placeholder,
companyName,
message,
phone_number,
},
`;
export const contactMapSectionFields = /* groq */ `
_type,
 section_theme,
 title_subtitle,
 mapImage,
`;
export const contactReviewSectionFields = /* groq */ `
_type,
title_subtitle,
section_theme,
image_content_array[]{
_type,
card_rich_text{
_type,
custom_rich_text
},
section_image{
${imageFields}
},
}
`;
export const casestudyBestworkSectionFields = /* groq */ `
_type,
title_subtitle,
section_theme,
"caseStudies" : *[_type == "case_study_detail_page" && defined(slug.current)]|order(_createdAt desc)[0..3]{
slug,
feature_images[]{
${imageFields}
},
"heroSectionPreview" : Section[_type=="hero_section_case_study_d_page"][0]{
description,
section_title,
title
}
}
`;
export const textImageBlockFields = /* groq */ `
_type,
section_title,
variant,
justify_content,
content{
_type,
custom_rich_text
},
image{
${imageFields}
}
`;
export const textImageBlocksFields = /* groq */ `
_type,
section_title,
blocks[]{
${textImageBlockFields}
}
`;
export const overviewSectionFields = /* groq */ `
_type,
technology_icon[]{
${imageFields}
},
feature_image[]{
${imageFields}
},
section_title,
title_subtitle
`;
export const bookConsultationHeroSectionFields = /* groq */ `
_type,
content{
_type,
custom_rich_text
},
background_classname,
section_theme,
variant,
title_subtitle
`;
export const blogHeroSectionField = /* groq */ `
_type,
section_theme,
hero_image{
${imageFields}
},
background_classname,
title,
"most_recent_blog":*[_type == "blog_detail_page" && defined(slug.current)][0]{
_id,
_type,
slug,
category[0]->{
_type,
title,
},
publish_date,
banner_title,
banner_desc,
author->{
_type,
author_Name
},
},
`;
export const BlogCategorySectionField = /* groq */ `
_type,
Category,
`;
export const featureBlogSectionField = /* groq */ `
_type,
all_posts_section,
section_theme,
featured_post_title,
"featured_post": *[_type == "blog_detail_page"][1]{
${featuredPostFields}
},
"all_Posts": *[_type == "blog_detail_page"][2..5]{
${featuredPostFields}
}
`;
export const ourBlogSectionFields = /* groq */ `
_type,
title_subtitle,
view_blog_button,
section_theme,
`;
export const newaLetterSectionFields = /* groq */ `
_type,
_id,
subscribe_button,
input_placeholder,
description,
title,
section_theme,
background_image{
${imageFields}
}
`;
export const joinOurNewsLetterSectionFields = /* groq */ `
_type,
input_placeholder,
title_description,
send_button
`;
export const titleBlogSectionFields = /* groq */ `
_type,
image{
${imageFields}
},
section_theme,
title,
content{
_type,
custom_rich_text
}
`;

// test

export const pricingPageInnerSectionFields = /* groq */ `
plan_name,
            packages[]->{
                popularity,
                label,
                package_duration,
                package_price_value,
                package_price_currency,
                package_price_summary,
                package_total_price,
                package_title,
                package_price_postfix,
                package_price_currency,
              package_details[]{
                    type,
              }
},
plan_services_template->{
                title,
                plan_services,
            },
`;