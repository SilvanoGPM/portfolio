import { Slide, Slider } from '$components/ui/slider';

import { ProjectImage } from './project-image';
import { ProjectTemplateProps } from '.';

export function ProjectSlider({ project }: ProjectTemplateProps) {
  const hasImages = project.images && project.images.length !== 0;

  if (!hasImages) {
    return (
      <ProjectImage
        image={project.thumbnail}
        alt={project.name}
        category={project.category}
      />
    );
  }

  const settings = {
    draggable: true,
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 30,
  };

  return (
    <Slider
      settings={settings}
      swiperComponents={{
        button: {
          top: '50%',
          zIndex: 30,
          bg: 'brand.500',
          color: 'white',
        },
        paginationBullet: {
          bg: 'black',
          opacity: 0.5,
        },
      }}
    >
      <>
        <Slide>
          <ProjectImage
            image={project.thumbnail}
            alt={project.name}
            category={project.category}
          />
        </Slide>

        {project.images?.map((image, index) => (
          <Slide key={image}>
            <ProjectImage
              image={image}
              alt={`${project.name} imagem número ${index}`}
              category={project.category}
            />
          </Slide>
        ))}
      </>
    </Slider>
  );
}
