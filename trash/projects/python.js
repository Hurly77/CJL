import DBLoader from "common/loaders/DBLoader";
import MapCards from "common/map-cards";
import ProjectsLayout from "layouts/project/ProjectsLayout";
import useProjects from "sdk/hooks/useProjects";

export default function Python() {
  const { projects, isLoading } = useProjects("python");

  return (
    <div>
      {isLoading ? (
        <div className="flex">
          <DBLoader />
        </div>
      ) : (
        <MapCards projects={projects} />
      )}
    </div>
  );
}

Python.getLayout = function getLayout(page) {
  return <ProjectsLayout>{page}</ProjectsLayout>;
};
