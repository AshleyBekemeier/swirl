// gulpfile.js
const gulp = require("gulp");
const theo = require("gulp-theo");
const renameCssCustomProperties = require("./tokens/scripts/renameCssCustomProperties");

const configSrc = "./tokens/styles.yml";

/**
 * HELPER TASKS
 */
gulp.task("tokens:renameproperties", () =>
  renameCssCustomProperties("dist/css/styles.custom-properties.css")
);

/**
 * GENERATE TOKENS
 */
gulp.task("tokens:css", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "custom-properties.css" },
      })
    )
    .pipe(gulp.dest("dist/css"))
);

gulp.task("tokens:json", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "json" },
      })
    )
    .pipe(gulp.dest("dist/"))
);

gulp.task("tokens:scss", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "scss" },
      })
    )
    .pipe(gulp.dest("dist/scss"))
);

gulp.task("tokens:less", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "less" },
      })
    )
    .pipe(gulp.dest("dist/less"))
);

gulp.task("tokens:sass", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "sass" },
      })
    )
    .pipe(gulp.dest("dist/sass"))
);

gulp.task("tokens:raw", () =>
  gulp
    .src(configSrc)
    .pipe(
      theo({
        transform: { type: "raw" },
        format: { type: "raw.json" },
      })
    )
    .pipe(gulp.dest("dist/raw"))
);

/**
 * BUILD TASKS
 */
gulp.task(
  "default",
  gulp.series(
    "tokens:css",
    "tokens:renameproperties",
    "tokens:json",
    "tokens:scss",
    "tokens:sass",
    "tokens:less",
    "tokens:raw"
  )
);
